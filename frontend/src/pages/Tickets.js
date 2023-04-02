import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Sidebar, TicketFilter, TicketTable, UserMenu} from '../components';

function Tickets() {
    const {isLoggedIn} = useSelector(state => state.auth);
    const [sidebar, setSidebar] = useState(false);
    let history = useHistory();

    useEffect(() => {
        document.title = 'Tickets';
    }, []);

    useEffect(() => {
        if (!isLoggedIn) {
            // redirect unauthenticated users
            history.push('/login');
        }
    }, [isLoggedIn, history]);

    const toggleSidebar = () => setSidebar(!sidebar);

    return (
        <div className="h-screen flex overflow-hidden bg-white">
            {isLoggedIn &&
            <React.Fragment>
                <Sidebar
                    sidebar={sidebar}
                    toggleSidebar={toggleSidebar}
                />
                <div className="flex flex-col w-0 flex-1 overflow-hidden">
                    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
                        <UserMenu
                            toggleSidebar={toggleSidebar}/>
                        <div className="px-4 py-3 w-full space-y-6">
                            <div className="border-b border-gray-200">
                                <div>
                                    <h1 className="text-xl leading-6 font-medium text-gray-900">
                                        Tickets
                                    </h1>
                                    <TicketFilter/>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <label htmlFor="search" className="sr-only">Search</label>
                                    <div className="relative rounded-md">
                                        <div
                                            className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd"
                                                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <input type="search" name="search" id="search"
                                               className="appearance-none block w-full sm:w-64 pl-10 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                                               placeholder="Search"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div
                                            className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <TicketTable/>
                                        </div>
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

export default Tickets;