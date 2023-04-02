import {
    FETCH_TICKETS_BEGIN,
    FETCH_TICKETS_SUCCESS,
    FETCH_TICKETS_FAILURE,
    FETCH_TICKET_SUCCESS,
    FETCH_TICKET_FAILURE,
    UPDATE_TICKET_SUCCESS,
    UPDATE_TICKET_FAILURE,
    CREATE_MESSAGE_BEGIN,
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_FAILURE,
    CLOSE_TICKET_BEGIN,
    CLOSE_TICKET_SUCCESS,
    CLOSE_TICKET_FAILURE,
    SET_TICKET_FILTER
} from '../types';

const initialState = {
    tickets: [],
    ticket: {},
    isFetchingTickets: false,
    isCreatingMessage: false,
    isClosingTicket: false,
    isTicketOpen: false,
    filter: 'all'
};

const tickets = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TICKETS_BEGIN:
            return {...state, isFetchingTickets: true};
        case FETCH_TICKETS_SUCCESS:
            return {...state, tickets: action.payload, isFetchingTickets: false};
        case FETCH_TICKETS_FAILURE:
            return initialState;
        case FETCH_TICKET_SUCCESS:
            return {...state, ticket: action.payload.ticket, isTicketOpen: action.payload.isTicketOpen};
        case FETCH_TICKET_FAILURE:
            return {...state, ticket: {}};
        case UPDATE_TICKET_SUCCESS:
            return {...state, tickets: action.payload.tickets, ticket: action.payload.ticket};
        case UPDATE_TICKET_FAILURE:
            return {...state};
        case CREATE_MESSAGE_BEGIN:
            return {...state, isCreatingMessage: true};
        case CREATE_MESSAGE_SUCCESS:
            return {...state, isCreatingMessage: false};
        case CREATE_MESSAGE_FAILURE:
            return {...state, isCreatingMessage: false};
        case CLOSE_TICKET_BEGIN:
            return {...state, isClosingTicket: true};
        case CLOSE_TICKET_SUCCESS:
            return {...state, isClosingTicket: false, isTicketOpen: false};
        case CLOSE_TICKET_FAILURE:
            return {...state, isClosingTicket: false};
        case SET_TICKET_FILTER:
            return {...state, filter: action.payload};
        default:
            return state;
    }
};

export default tickets;