import {BASE_URL} from '../../api';
import {
    FETCH_TEAMS_BEGIN,
    FETCH_TEAMS_SUCCESS,
    FETCH_TEAMS_FAILURE
} from '../types';

const fetchTeams = () => async (dispatch, getState) => {
    try {
        dispatch({type: FETCH_TEAMS_BEGIN});

        // retrieve the token for this request
        const token = getState().auth.user.token;

        const request = await fetch(`${BASE_URL}teams`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (request.status === 200) {
            const teams = await request.json();

            dispatch({type: FETCH_TEAMS_SUCCESS, payload: teams});
        }
    } catch (err) {
        console.log(err);
        dispatch({type: FETCH_TEAMS_FAILURE});
    }
};

export const teams = {fetchTeams};
