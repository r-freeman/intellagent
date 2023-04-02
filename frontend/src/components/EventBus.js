import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {io} from 'socket.io-client';

import {SOCKETS_URL} from '../api';
import actions from '../redux/actions';

const TICKET_ASSIGNED = 'TICKET_ASSIGNED',
    TICKET_NEW_MESSAGE = 'TICKET_NEW_MESSAGE';

function EventBus() {
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleEvent = useCallback(async (event, payload) => {
        switch (event) {
            case TICKET_ASSIGNED:
                await dispatch(actions.tickets.fetchTickets());
                await dispatch(actions.notifications.fetchNotifications());
                dispatch(actions.notifications.create(payload.notification));
                break;
            case TICKET_NEW_MESSAGE:
                dispatch(actions.tickets.updateTicket(payload.ticket));
                await dispatch(actions.notifications.fetchNotifications());
                dispatch(actions.notifications.create(payload.notification));
                break;
            default:
                return;
        }
    }, [dispatch]);

    useEffect(() => {
        const socket = io(SOCKETS_URL, {
            auth: {
                token: user.token
            }
        });

        // set up socket listeners
        socket.on(TICKET_ASSIGNED, (payload) => handleEvent(TICKET_ASSIGNED, payload));
        socket.on(TICKET_NEW_MESSAGE, (payload) => handleEvent(TICKET_NEW_MESSAGE, payload));

        return () => {
            // clean up socket listeners
            socket.off(TICKET_ASSIGNED, handleEvent);
            socket.off(TICKET_NEW_MESSAGE, handleEvent);
        }
    }, [handleEvent, user.token]);

    return null;
}

export default EventBus;