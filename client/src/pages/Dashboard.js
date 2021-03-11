import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Sidebar from '../components/Sidebar';
import DropdownSmall from '../components/DropdownSmall';
import DropdownLarge from '../components/DropdownLarge';

function Dashboard() {
    const {isLoggedIn} = useSelector(state => state.auth);
    const [sidebar, setSidebar] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    let history = useHistory();

    useEffect(() => {
        if (!isLoggedIn) {
            // redirect unauthenticated users
            history.push('/login');
        }
    }, [isLoggedIn, history]);

    const toggleSidebar = () => setSidebar(!sidebar);
    const toggleDropdown = () => setDropdown(!dropdown);

    return (
        <div className="h-screen flex overflow-hidden bg-white">
            {isLoggedIn &&
            <React.Fragment>
                <Sidebar
                    sidebar={sidebar}
                    toggleSidebar={toggleSidebar}
                />
                <div className="flex flex-col w-0 flex-1 overflow-hidden">
                    <DropdownSmall
                        dropdown={dropdown}
                        toggleSidebar={toggleSidebar}
                        toggleDropdown={toggleDropdown}
                        setDropdown={setDropdown}/>
                    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
                        <div
                            className="lg:border-b lg:border-gray-200 px-3 py-4 flex items-center justify-between">
                            <div className="lg:flex justify-end w-full hidden">
                                <DropdownLarge
                                    dropdown={dropdown}
                                    toggleDropdown={toggleDropdown}
                                    setDropdown={setDropdown}/>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="px-4 py-3 w-full">
                                <div>
                                    <h1 className="text-xl leading-6 font-medium text-gray-900">
                                        Last 30 days
                                    </h1>
                                </div>
                            </div>
                            <div
                                className="px-4 py-3 w-full">
                                <div>
                                    <h3 className="text-base leading-6 font-medium text-gray-900">
                                        Tickets
                                    </h3>
                                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                        <div className="flex flex-col bg-white overflow-hidden shadow rounded-lg">
                                            <div className="flex-grow px-4 py-5 sm:p-6">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 rounded-md p-3">
                                                        <svg className="h-12 w-12 text-blue-500"
                                                             xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 24 24"
                                                             stroke="currentColor" aria-hidden="true">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth="2"
                                                                  d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                                                        </svg>
                                                    </div>
                                                    <div className="ml-5 w-0 flex-1">
                                                        <dt className="text-sm font-medium text-gray-500 truncate">
                                                            Total Tickets
                                                        </dt>
                                                        <dd className="flex items-baseline">
                                                            <div className="text-2xl font-semibold text-gray-900">
                                                                46
                                                            </div>
                                                        </dd>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-4 sm:px-6">
                                                <div className="text-sm">
                                                    <a href="#"
                                                       className="font-medium text-blue-500 hover:text-blue-600"> View
                                                        all<span className="sr-only"> tickets</span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col bg-white overflow-hidden shadow rounded-lg">
                                            <div className="flex-grow px-4 py-5 sm:p-6">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 rounded-md p-3">
                                                        <svg className="h-12 w-12 text-blue-500" fill="none"
                                                             stroke="currentColor"
                                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth="2"
                                                                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>
                                                        </svg>

                                                    </div>
                                                    <div className="ml-5 w-0 flex-1">
                                                        <dt className="text-sm font-medium text-gray-500 truncate">
                                                            Open Tickets
                                                        </dt>
                                                        <dd className="flex items-baseline">
                                                            <div className="text-2xl font-semibold text-gray-900">
                                                                12
                                                            </div>
                                                        </dd>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-4 sm:px-6">
                                                <div className="text-sm">
                                                    <a href="#"
                                                       className="font-medium text-blue-500 hover:text-blue-600"> View
                                                        all<span className="sr-only"> open tickets</span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col bg-white overflow-hidden shadow rounded-lg">
                                            <div className="flex-grow px-4 py-5 sm:p-6">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 rounded-md p-3">
                                                        <svg className="h-12 w-12 text-blue-500" fill="none"
                                                             stroke="currentColor"
                                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth="2"
                                                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                                        </svg>
                                                    </div>
                                                    <div className="ml-5 w-0 flex-1">
                                                        <dt className="text-sm font-medium text-gray-500 truncate">
                                                            Closed Tickets
                                                        </dt>
                                                        <dd className="flex items-baseline">
                                                            <div className="text-2xl font-semibold text-gray-900">
                                                                34
                                                            </div>
                                                        </dd>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-4 sm:px-6">
                                                <div className="text-sm">
                                                    <a href="#"
                                                       className="font-medium text-blue-500 hover:text-blue-600"> View
                                                        all<span className="sr-only"> closed tickets</span></a>
                                                </div>
                                            </div>
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
                                        <div className="flex flex-col bg-white overflow-hidden shadow rounded-lg">
                                            <div className="flex-grow px-4 py-5 sm:p-6">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 rounded-md p-3">
                                                        <svg className="h-12 w-12 text-blue-500" fill="none"
                                                             stroke="currentColor"
                                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth="2"
                                                                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                        </svg>
                                                    </div>
                                                    <div className="ml-5 w-0 flex-1">
                                                        <dt className="text-sm font-medium text-gray-500 truncate">
                                                            Satisfaction Rate
                                                        </dt>
                                                        <dd className="flex items-baseline">
                                                            <div className="text-2xl font-semibold text-gray-900">
                                                                96%
                                                            </div>
                                                        </dd>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-4 sm:px-6">
                                                <div className="text-sm">
                                                    <a href="#"
                                                       className="font-medium text-blue-500 hover:text-blue-600"> View
                                                        all</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col bg-white overflow-hidden shadow rounded-lg">
                                            <div className="flex-grow px-4 py-5 sm:p-6">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 rounded-md p-3">
                                                        <svg className="h-12 w-12 text-blue-500" fill="none"
                                                             stroke="currentColor"
                                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth="2"
                                                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                        </svg>
                                                    </div>
                                                    <div className="ml-5 w-0 flex-1">
                                                        <dt className="text-sm font-medium text-gray-500 truncate">
                                                            Issue Resolution
                                                        </dt>
                                                        <dd className="flex items-baseline">
                                                            <div className="text-2xl font-semibold text-gray-900">
                                                                73%
                                                            </div>
                                                        </dd>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-4 sm:px-6">
                                                <div className="text-sm">
                                                    <a href="#"
                                                       className="font-medium text-blue-500 hover:text-blue-600"> View
                                                        all</a>
                                                </div>
                                            </div>
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