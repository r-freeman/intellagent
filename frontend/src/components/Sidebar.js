import React from 'react';
import {Transition} from '@headlessui/react';
import {NavLink, useRouteMatch} from 'react-router-dom';

import logo from '../assets/svg/logo.svg';
import TeamList from './TeamList';

function Sidebar({sidebar, toggleSidebar}) {
    let match = useRouteMatch();
    const isCurrentPath = (path) => match.path.includes(path);

    return (
        <div>
            <div className='lg:hidden'>
                <Transition show={sidebar} className="fixed inset-0 flex z-40">
                    <Transition.Child
                        enter="transition-opacity ease-linear duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" aria-hidden="true"
                             onClick={toggleSidebar}>
                            <div className="absolute inset-0 bg-gray-600 opacity-75"/>
                        </div>
                    </Transition.Child>
                    <Transition.Child
                        enter="transition ease-in-out duration-500 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-500 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                        className="relative flex-1 flex flex-col max-w-xs w-full py-4 bg-gray-50"
                    >
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button
                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={toggleSidebar}>
                                <span className="sr-only">Close sidebar</span>
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex-shrink-0 flex items-center px-6">
                            <img className="h-10 w-auto"
                                 src={logo}
                                 alt="Intellagent"/>
                        </div>
                        <div className="mt-5 flex-1 h-0 overflow-y-auto">
                            <nav className="px-2">
                                <div className="space-y-1">
                                    <NavLink to="/dashboard"
                                             className={`${isCurrentPath('dashboard')
                                                 ? 'bg-gray-200 text-gray-900'
                                                 : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md`}
                                             aria-current="page"
                                    >
                                        <svg
                                            className={`${isCurrentPath('dashboard')
                                                ? 'text-gray-500'
                                                : 'text-gray-400 group-hover:text-gray-500'} mr-3 h-6 w-6`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                        </svg>
                                        Dashboard
                                    </NavLink>
                                    <NavLink to="/tickets"
                                             className={`${isCurrentPath('tickets')
                                                 ? 'bg-gray-200 text-gray-900'
                                                 : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md`}>
                                        <svg className={`${isCurrentPath('tickets')
                                            ? 'text-gray-500'
                                            : 'text-gray-400 group-hover:text-gray-500'} mr-3 h-6 w-6`}
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                                        </svg>
                                        Tickets
                                    </NavLink>
                                    <button type="button"
                                            className="w-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md focus:outline-none">
                                        <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                        Recent
                                    </button>
                                </div>
                                <TeamList/>
                            </nav>
                        </div>
                        <div className="flex-shrink-0 w-14" aria-hidden="true"/>
                    </Transition.Child>
                </Transition>
            </div>
            <div className="hidden lg:flex lg:flex-shrink-0">
                <div className="flex flex-col w-64 border-r border-gray-200 py-4 bg-gray-50 min-h-screen">
                    <div className="flex items-center flex-shrink-0 px-6">
                        <img className="h-10 w-auto"
                             src={logo}
                             alt="Intellagent"/>
                    </div>
                    <div className="h-0 flex-1 flex flex-col overflow-y-auto">
                        <nav className="px-3 mt-5">
                            <div className="space-y-1">
                                <NavLink to="/dashboard"
                                         className={`${isCurrentPath('dashboard')
                                             ? 'bg-gray-200 text-gray-900'
                                             : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'} group flex items-center px-2 py-2 text-sm font-medium rounded-md`}>
                                    <svg
                                        className={`${isCurrentPath('dashboard')
                                            ? 'text-gray-500'
                                            : 'text-gray-400 group-hover:text-gray-500 '} mr-3 h-6 w-6`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                    </svg>
                                    Dashboard
                                </NavLink>
                                <NavLink to="/tickets"
                                         className={`${isCurrentPath('tickets')
                                             ? 'bg-gray-200 text-gray-900'
                                             : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'} group flex items-center px-2 py-2 text-sm font-medium rounded-md`}>
                                    <svg
                                        className={`${isCurrentPath('tickets')
                                            ? 'text-gray-500'
                                            : 'text-gray-400 group-hover:text-gray-500 '} mr-3 h-6 w-6`}
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                                    </svg>
                                    Tickets
                                </NavLink>
                                <button type="button"
                                        className="w-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md focus:outline-none">
                                    <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    Recent
                                </button>
                            </div>
                            <TeamList/>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;