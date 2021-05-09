import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import routes from './routes';
import mongooseConnect from '../mongoose';
import cors from 'cors';
import passport from 'passport';
import passportUseStrategy from './passport/strategy';

import {
    notFound,
    routeGuard,
    unauthorised
} from './middleware/RouteMiddleware';

mongooseConnect().then(status => {
    console.log(status);
}).catch(err => {
    console.error(err);
    process.exit(1);
});

passportUseStrategy(passport);

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
} else {
    require("./twitter/webhooks");
}

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(passport.initialize());

app.use('/api/v1', routeGuard(), routes);
app.use(notFound());
app.use(unauthorised());

export default app;