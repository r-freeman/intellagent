import fs from 'fs';
import jwt from 'express-jwt';

const PUB_KEY = fs.readFileSync('id_rsa_pub.pem', 'utf8');

function notFound() {
    return function (req, res, next) {
        if (!req.route) {
            return res.status(404).send({error: 'Not found'});
        }
        next();
    }
};

function unauthorised() {
    return function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
            return res.status(401).send({error: 'Unauthorised'});
        }
        next();
    }
}

// route guard, all routes except POST /auth require valid bearer token in header
function routeGuard() {
    return jwt({
        secret: PUB_KEY,
        algorithms: ['RS256']
    }).unless({
        path: [
            {
                url: new RegExp('/auth'),
                methods: ['POST']
            }
        ]
    })
}

export {notFound, routeGuard, unauthorised};
