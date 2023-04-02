import {BASE_URL} from '../../api';
import {
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    LOGIN_BEGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS
} from '../types';

const fetchUser = () => (dispatch) => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user !== null) {
        dispatch({type: FETCH_USER_SUCCESS, payload: user})
    } else {
        dispatch({type: FETCH_USER_FAILURE});
    }
};

const login = (email, password) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({type: LOGIN_BEGIN});

        fetch(`${BASE_URL}auth/login`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }).then(response => response.json()
            .then(res => {
                if (response.status === 200) {
                    const user = res;

                    localStorage.setItem('user', JSON.stringify(user));
                    dispatch({type: LOGIN_SUCCESS, payload: user});
                    resolve("");
                } else {
                    dispatch({type: LOGIN_FAILURE});
                    reject("Email address or password was incorrect.");
                }
            })).catch(err => {
            dispatch({type: LOGIN_FAILURE});
            reject("Something went wrong.");
        });
    });
};

const logout = () => (dispatch) => {
    localStorage.removeItem('user');
    dispatch({type: LOGOUT_SUCCESS})
};

export const auth = {fetchUser, login, logout};
