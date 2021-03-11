import {
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    LOGIN_BEGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS
} from '../types';

const initialState = {user: null, isAuthenticating: false, isLoggedIn: false};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {...state, user: action.payload, isLoggedIn: true};
        case FETCH_USER_FAILURE:
            return initialState;
        case LOGIN_BEGIN:
            return {...state, isAuthenticating: true};
        case LOGIN_SUCCESS:
            return {...state, user: action.payload, isAuthenticating: false, isLoggedIn: true};
        case LOGIN_FAILURE:
            return {...state, isAuthenticating: false};
        case LOGOUT_SUCCESS:
            return initialState;
        default:
            return state;
    }
};

export default auth;