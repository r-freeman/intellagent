import {
    FETCH_TICKETS_BEGIN,
    FETCH_TICKETS_SUCCESS,
    FETCH_TICKETS_FAILURE
} from '../types';

const initialState = {tickets: [], isFetchingTickets: false};

const tickets = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TICKETS_BEGIN:
            return {...state, isFetchingTickets: true};
        case FETCH_TICKETS_SUCCESS:
            return {tickets: action.payload, isFetchingTickets: false};
        case FETCH_TICKETS_FAILURE:
            return initialState;
        default:
            return state;
    }
};

export default tickets;