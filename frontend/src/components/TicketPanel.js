import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Datetime from './Datetime';
import TicketCloseModal from './TicketCloseModal';

function TicketPanel() {
    const [closeModal, setCloseModal] = useState(false);
    const {user} = useSelector(state => state.auth);
    const {ticket, isTicketOpen} = useSelector(state => state.tickets);

    const toggleCloseModal = () => setCloseModal(!closeModal);

    return (
        <>
            {closeModal &&
            <TicketCloseModal
                closeModal={closeModal}
                toggleCloseModal={toggleCloseModal}/>
            }
            <section>
                <div
                    className="mt-4 bg-white m:rounded-lg sm:overflow-hidden shadow rounded-lg">
                    <div className="p-4 bg-white border-b border-gray-200">
                        <div className="flex justify-between items-center">
                            <h3
                                className="text-base leading-6 font-medium text-gray-900 mr-2">
                                Ticket information
                            </h3>

                            <div className="relative z-0 inline-flex shadow-sm rounded-md group">
                                <button type="button"
                                        className="relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                                        onClick={toggleCloseModal}
                                        disabled={!isTicketOpen}>
                                    <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                         fill="none"
                                         stroke="currentColor"
                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                    </svg>
                                    Close ticket
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-5">
                        <dl>
                            <div className="grid grid-cols-3 gap-4">
                                <dt className="text-sm font-semibold text-gray-900 col-span-1">
                                    Status
                                </dt>
                                <dd className="flex col-span-2">
                                    <span
                                        className={`${ticket.status === 'unassigned'
                                            ? 'bg-red-100 text-red-800'
                                            : ticket.status === 'open'
                                                ? 'bg-blue-400 text-white'
                                                : 'bg-green-400 text-white'} 
                                                inline-flex px-2 py-0.5 text-sm leading-5 font-medium rounded-full capitalize`}>
                                    {ticket.status}
                                    </span>
                                </dd>
                                <dt className="text-sm font-semibold text-gray-900 col-span-1">
                                    Reference
                                </dt>
                                <dd className="inline-flex items-center text-sm text-gray-900 col-span-2 capitalize">
                                    <span className="mr-2">{ticket.reference}</span>
                                    <button
                                        className="inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none">
                                        <svg className="w-5 h-5" fill="none"
                                             stroke="currentColor"
                                             viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                                        </svg>
                                    </button>
                                </dd>
                                <dt className="text-sm font-semibold text-gray-900 col-span-1">
                                    Issue type
                                </dt>
                                <dd className="flex text-sm text-gray-900 col-span-2 capitalize">
                                    <span className="flex-grow">{ticket.issue_type.name}</span>
                                </dd>
                                <dt className="text-sm font-semibold text-gray-900 col-span-1">
                                    Agent
                                </dt>
                                <dd className="flex text-sm text-gray-900 col-span-2">
                                    <span className="flex-grow">{user.name}</span>
                                </dd>
                                <dt className="text-sm font-semibold text-gray-900 col-span-1">
                                    Team
                                </dt>
                                <dd className="flex text-sm text-gray-900 col-span-2">
                                    <span className="flex-grow">{user.team.name}</span>
                                </dd>
                                <dt className="text-sm font-semibold text-gray-900 col-span-1">
                                    Date created
                                </dt>
                                <dd className="flex text-sm text-gray-900 col-span-2">
                                    <span className="flex-grow">
                                        <Datetime date={ticket.created_at}/>
                                    </span>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TicketPanel;