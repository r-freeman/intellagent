import {BASE_URL} from '../../api';
import {
    FETCH_TICKETS_BEGIN,
    FETCH_TICKETS_SUCCESS,
    FETCH_TICKETS_FAILURE
} from '../types';

const fetchTickets = () => async (dispatch, getState) => {
    try {
        dispatch({type: FETCH_TICKETS_BEGIN});

        // retrieve the token for this request
        const {token} = getState().auth.user;

        const request = await fetch(`${BASE_URL}tickets/list`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (request.status === 200) {
            const tickets = await request.json();

            dispatch({type: FETCH_TICKETS_SUCCESS, payload: tickets});
        }
    } catch (err) {
        console.log(err);
        dispatch({type: FETCH_TICKETS_FAILURE});
    }
};

export const tickets = {fetchTickets};
