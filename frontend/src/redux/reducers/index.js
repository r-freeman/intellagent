import {combineReducers} from 'redux';
import auth from './auth';
import teams from './teams';
import tickets from './tickets';
import notifications from './notifications';

const rootReducer = combineReducers({
    auth,
    teams,
    tickets,
    notifications
});

export default rootReducer;