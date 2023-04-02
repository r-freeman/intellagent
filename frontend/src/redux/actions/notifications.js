import {
    CREATE_NOTIFICATION,
    DISMISS_NOTIFICATION,
    FETCH_NOTIFICATIONS_BEGIN,
    FETCH_NOTIFICATIONS_SUCCESS,
    FETCH_NOTIFICATIONS_FAILURE,
    DELETE_NOTIFICATION_BEGIN,
    DELETE_NOTIFICATION_SUCCESS,
    DELETE_NOTIFICATION_FAILURE,
    DELETE_NOTIFICATIONS_BEGIN,
    DELETE_NOTIFICATIONS_SUCCESS,
    DELETE_NOTIFICATIONS_FAILURE
} from '../types';

import {BASE_URL} from '../../api';

const create = ({type, title, message}) => (dispatch, getState) => {
    const {localNotifications} = getState().notifications;
    let notification, i;

    i = notifications.length > 0 ? Math.max.apply(null, notifications.map(t => t.id)) + 1 : 1;

    notification = {id: i, type, title, message};

    const newLocalNotifications = localNotifications;
    newLocalNotifications.push(notification);

    dispatch({type: CREATE_NOTIFICATION, payload: newLocalNotifications});

    setTimeout(() => dispatch(dismiss(notification.id)), 5000);
};

const dismiss = (id) => (dispatch, getState) => {
    const {localNotifications} = getState().notifications;

    const newLocalNotifications = localNotifications.filter(n => n.id !== id);

    dispatch({type: DISMISS_NOTIFICATION, payload: newLocalNotifications});
}

const fetchNotifications = () => async (dispatch, getState) => {
    try {
        dispatch({type: FETCH_NOTIFICATIONS_BEGIN});

        // retrieve the token for this request
        const token = getState().auth.user.token;

        const request = await fetch(`${BASE_URL}notifications`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (request.status === 200) {
            const notifications = await request.json();

            dispatch({type: FETCH_NOTIFICATIONS_SUCCESS, payload: notifications});
        }
    } catch (err) {
        console.log(err);
        dispatch({type: FETCH_NOTIFICATIONS_FAILURE});
    }
};

const deleteNotification = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: DELETE_NOTIFICATION_BEGIN});

        const {notifications} = getState().notifications;
        const token = getState().auth.user.token;

        const request = await fetch(`${BASE_URL}notifications/${id}`, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (request.status === 204) {
            const notificationIndex = notifications.findIndex(n => n._id === id);
            const newNotifications = notifications;

            newNotifications.splice(notificationIndex, 1);

            dispatch({type: DELETE_NOTIFICATION_SUCCESS, payload: newNotifications});
        }
    } catch (err) {
        console.log(err);
        dispatch({type: DELETE_NOTIFICATION_FAILURE});
    }
};

const deleteNotifications = () => async (dispatch, getState) => {
    try {
        dispatch({type: DELETE_NOTIFICATIONS_BEGIN});

        const token = getState().auth.user.token;

        const request = await fetch(`${BASE_URL}notifications`, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (request.status === 204) {
            dispatch({type: DELETE_NOTIFICATIONS_SUCCESS, payload: []});
        } else {
            dispatch({type: DELETE_NOTIFICATIONS_FAILURE});
        }
    } catch (err) {
        console.log(err);
        dispatch({type: DELETE_NOTIFICATIONS_FAILURE});
    }
};

export const notifications = {create, dismiss, fetchNotifications, deleteNotification, deleteNotifications};