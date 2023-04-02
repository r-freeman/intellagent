import React, {useEffect, useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {Sidebar, UserMenu} from '../components';

function Dashboard() {
    const {isLoggedIn} = useSelector(state => state.auth);
    const [sidebar, setSidebar] = useState(false);
    let history = useHistory();

    useEffect(() => {
        document.title = 'Dashboard';
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
                        <div className="space-y-6">
                            <div className="px-4 py-3 w-full">
                                <h1 className="text-xl leading-6 font-medium text-gray-900">
                                    Last 30 days
                                </h1>
                            </div>
                            <div
                                className="px-4 py-3 w-full">
                                <div>
                                    <h3 className="text-base leading-6 font-medium text-gray-900">
                                        Tickets
                                    </h3>

                                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                        <div
                                            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                                            <dt>
                                                <div className="absolute bg-blue-500 rounded-md p-2">
                                                    <svg className="h-8 w-8 text-white" fill="none"
                                                         stroke="currentColor"
                                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                                                    </svg>
                                                </div>
                                                <p className="ml-16 text-sm font-medium text-gray-500 truncate">Total
                                                    tickets</p>
                                            </dt>
                                            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                                                <p className="text-2xl font-semibold text-gray-900">
                                                    71,897
                                                </p>
                                                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                                                    <svg className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd"
                                                              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                    <span className="sr-only">
                                                        Increased by
                                                    </span>
                                                    122
                                                </p>
                                                <div
                                                    className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                                                    <div className="text-sm">
                                                        <NavLink to="/tickets"
                                                                 className="font-medium text-blue-600 hover:text-blue-500">View
                                                            all <span
                                                                className="sr-only">closed tickets</span></NavLink>
                                                    </div>
                                                </div>
                                            </dd>
                                        </div>

                                        <div
                                            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                                            <dt>
                                                <div className="absolute bg-blue-500 rounded-md p-2">
                                                    <svg className="h-8 w-8 text-white" fill="none"
                                                         stroke="currentColor"
                                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>
                                                    </svg>
                                                </div>
                                                <p className="ml-16 text-sm font-medium text-gray-500 truncate">Open
                                                    tickets</p>
                                            </dt>
                                            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                                                <p className="text-2xl font-semibold text-gray-900">
                                                    58.16%
                                                </p>
                                                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                                                    <svg className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd"
                                                              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                    <span className="sr-only">
                                                        Increased by
                                                    </span>
                                                    5.4%
                                                </p>
                                                <div
                                                    className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                                                    <div className="text-sm">
                                                        <NavLink to="/tickets"
                                                                 className="font-medium text-blue-600 hover:text-blue-500">View
                                                            all <span
                                                                className="sr-only">open tickets</span></NavLink>
                                                    </div>
                                                </div>
                                            </dd>
                                        </div>

                                        <div
                                            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                                            <dt>
                                                <div className="absolute bg-blue-500 rounded-md p-2">
                                                    <svg className="h-8 w-8 text-white" fill="none"
                                                         stroke="currentColor"
                                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                                    </svg>
                                                </div>
                                                <p className="ml-16 text-sm font-medium text-gray-500 truncate">Closed
                                                    tickets</p>
                                            </dt>
                                            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                                                <p className="text-2xl font-semibold text-gray-900">
                                                    24.57%
                                                </p>
                                                <p className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                                                    <svg className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd"
                                                              d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                    <span className="sr-only">
                                                        Decreased by
                                                    </span>
                                                    3.2%
                                                </p>
                                                <div
                                                    className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                                                    <div className="text-sm">
                                                        <NavLink to="/tickets"
                                                                 className="font-medium text-blue-600 hover:text-blue-500">View
                                                            all <span
                                                                className="sr-only">closed tickets</span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                            <div
                                className="px-4 py-3 w-full">
                                <div>
                                    <h3 className="text-base leading-6 font-medium text-gray-900">
                                        Performance overview
                                    </h3>
                                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                        <div
                                            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                                            <dt>
                                                <div className="absolute bg-blue-500 rounded-md p-2">
                                                    <svg className="h-8 w-8 text-white" fill="none"
                                                         stroke="currentColor"
                                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" stroke-linejolin="round"
                                                              strokeWidth="2"
                                                              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                    </svg>
                                                </div>
                                                <p className="ml-16 text-sm font-medium text-gray-500 truncate">Customer
                                                    satisfaction</p>
                                            </dt>
                                            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                                                <p className="text-2xl font-semibold text-gray-900">
                                                    96%
                                                </p>
                                                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                                                    <svg className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd"
                                                              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                    <span className="sr-only">
                                                        Increased by
                                                    </span>
                                                    122
                                                </p>
                                                <div
                                                    className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                                                    <div className="text-sm">
                                                        <NavLink to="/tickets"
                                                                 className="font-medium text-blue-600 hover:text-blue-500">View
                                                            all <span className="sr-only">customer feedback</span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </dd>
                                        </div>

                                        <div
                                            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                                            <dt>
                                                <div className="absolute bg-blue-500 rounded-md p-2">
                                                    <svg className="h-8 w-8 text-white" fill="none"
                                                         stroke="currentColor"
                                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2" d="M5 13l4 4L19 7"/>
                                                    </svg>
                                                </div>
                                                <p className="ml-16 text-sm font-medium text-gray-500 truncate">Issue
                                                    resolution</p>
                                            </dt>
                                            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                                                <p className="text-2xl font-semibold text-gray-900">
                                                    73%
                                                </p>
                                                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                                                    <svg className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd"
                                                              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                    <span className="sr-only">
                                                        Increased by
                                                    </span>
                                                    5.4%
                                                </p>
                                                <div
                                                    className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                                                    <div className="text-sm">
                                                        <NavLink to="/tickets"
                                                                 className="font-medium text-blue-600 hover:text-blue-500">View
                                                            all <span
                                                                className="sr-only">customer feedback</span>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </dd>
                                        </div>
                                    </dl>
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

export default Dashboard;