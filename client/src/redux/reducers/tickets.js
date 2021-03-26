import {
    FETCH_TICKETS_BEGIN,
    FETCH_TICKETS_SUCCESS,
    FETCH_TICKETS_FAILURE,
    FIND_TICKET_SUCCESS,
    FIND_TICKET_FAILURE
} from '../types';

const initialState = {tickets: [], ticket: {}, isFetchingTickets: false};

const tickets = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TICKETS_BEGIN:
            return {...state, isFetchingTickets: true};
        case FETCH_TICKETS_SUCCESS:
            return {...state, tickets: action.payload, isFetchingTickets: false};
        case FETCH_TICKETS_FAILURE:
            return initialState;
        case FIND_TICKET_SUCCESS:
            return {...state, ticket: action.payload}
        case FIND_TICKET_FAILURE:
            return {...state, ticket: {}}
        default:
            return state;
    }
};

export default tickets;