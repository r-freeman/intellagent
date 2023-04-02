import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';

import actions from '../redux/actions';
import {Sidebar, TicketPanel, MessagePanel, UserMenu} from '../components';

function Ticket() {
    const {isLoggedIn} = useSelector(state => state.auth);
    const {ticket, tickets} = useSelector(state => state.tickets);
    const [sidebar, setSidebar] = useState(false);
    const dispatch = useDispatch();
    let {reference} = useParams();
    let history = useHistory();

    useEffect(() => {
        document.title = `Ticket #${ticket.reference}`;
    }, [ticket]);

    useEffect(() => {
        if (!isLoggedIn) {
            history.push('/login');
        }
    }, [isLoggedIn, history]);

    useEffect(() => {
        dispatch(actions.tickets.fetchTicket(reference));
    }, [tickets, dispatch, reference]);

    const toggleSidebar = () => setSidebar(!sidebar);
    const hasTicket = (Object.keys(ticket).length > 0 && typeof ticket.customer !== 'undefined');

    return (
        <div className="h-screen flex overflow-hidden">
            {(isLoggedIn && hasTicket) &&
            <React.Fragment>
                <Sidebar
                    sidebar={sidebar}
                    toggleSidebar={toggleSidebar}
                />
                <div className="flex flex-col w-0 flex-1 overflow-hidden">
                    <main className="flex-1 relative overflow-y-auto focus:outline-none" tabIndex="0">
                        <UserMenu
                            toggleSidebar={toggleSidebar}
                        />
                        <div className="space-y-6">
                            <div className="px-4">
                                <div className="mx-auto flex flex-col-reverse xl:flex-row xl:space-x-4">
                                    <MessagePanel/>
                                    <div className="flex-1">
                                        <TicketPanel/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </React.Fragment>
            }
        </div>
    )
}

export default Ticket;