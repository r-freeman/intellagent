import {combineReducers} from 'redux';
import auth from './auth';
import teams from './teams';
import tickets from './tickets';

const rootReducer = combineReducers({
    auth,
    teams,
    tickets
});

export default rootReducer;