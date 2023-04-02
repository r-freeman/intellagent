import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../redux/actions';

function TicketCloseModal({toggleCloseModal}) {
    const {isClosingTicket} = useSelector(state => state.tickets);
    const dispatch = useDispatch();

    const handleClose = async () => {
        dispatch(actions.tickets.closeTicket())
            .then(status => {
                dispatch(actions.notifications.create({
                    type: "success",
                    title: "Ticket closed",
                    message: status
                }));
                toggleCloseModal();
            }).catch(err => {
            dispatch(actions.notifications.create({
                type: "error",
                title: "Error",
                message: err
            }));
        });
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
             aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" aria-hidden="true"
                     onClick={toggleCloseModal}/>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div
                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-base leading-6 font-medium text-gray-900 inline-flex"
                                    id="modal-title">
                                    <svg className="h-6 w-6 text-gray-500 mr-2"
                                         fill="none"
                                         stroke="currentColor"
                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                    </svg>
                                    Close ticket
                                </h3>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to close this ticket? This action cannot be undone,
                                        confirm the issue was resolved before proceeding.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button"
                                className="w-full sm:w-20 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 sm:ml-3"
                                onClick={handleClose}
                                disabled={isClosingTicket}>
                            {isClosingTicket
                                ? <svg className="animate-spin inline-flex h-5 w-5 text-white"
                                       xmlns="http://www.w3.org/2000/svg" fill="none"
                                       viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10"
                                            stroke="currentColor" strokeWidth="4"/>
                                    <path className="opacity-75" fill="currentColor"
                                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                </svg>
                                : <span className="h-5">Confirm</span>
                            }
                        </button>
                        <button type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 sm:mt-0 sm:ml-3 sm:w-auto"
                                onClick={toggleCloseModal}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketCloseModal;