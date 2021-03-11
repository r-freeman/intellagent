import {combineReducers} from 'redux';
import auth from './auth';
import teams from './teams';

const rootReducer = combineReducers({
    auth,
    teams
});

export default rootReducer;