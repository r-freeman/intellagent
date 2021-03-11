import {
    FETCH_TEAMS_BEGIN,
    FETCH_TEAMS_SUCCESS,
    FETCH_TEAMS_FAILURE
} from '../types';

const initialState = {teams: [], isFetchingTeams: false};

const teams = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEAMS_BEGIN:
            return {...state, isFetchingTeams: true};
        case FETCH_TEAMS_SUCCESS:
            return {...state, teams: action.payload, isFetchingTeams: false};
        case FETCH_TEAMS_FAILURE:
            return initialState;
        default:
            return state;
    }
};

export default teams;