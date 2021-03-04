import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from '../types';

const initialState = {user: null};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return state;
        case FETCH_USER_SUCCESS:
            return state;
        case FETCH_USER_FAILURE:
            return state;
        default:
            return state;
    }
};

export default auth;