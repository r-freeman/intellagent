import React from 'react';
import {Transition} from '@headlessui/react';
import {NavLink, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import actions from '../redux/actions';

function DropdownSmall({dropdown, toggleSidebar, toggleDropdown, setDropdown}) {
    const dispatch = useDispatch();
    let history = useHistory();

    const handleLogout = function () {
        dispatch(actions.auth.logout());
        history.push('/');
    }

    return (
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
            <button
                className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400 lg:hidden"
                onClick={toggleSidebar}>
                <span className="sr-only">Open sidebar</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16"/>
                </svg>
            </button>
            <div className="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex-1 flex">
                    <div className="w-full flex md:ml-0"/>
                </div>
                <div className="flex items-center">
                    <div className="relative inline-flex mr-4">
                        <button type="button"
                                className="inline-flex items-center text-gray-400 hover:text-gray-500 rounded-md transition ease-in-out duration-150 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                            </svg>
                        </button>
                        <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"/>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"/>
                        </span>
                    </div>
                    <div className="relative">
                        <div>
                            <button
                                onBlur={() => setDropdown(false)}
                                onClick={toggleDropdown}
                                className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                                id="user-menu" aria-haspopup="true">
                                <span className="sr-only">Open user menu</span>
                                <img className="h-8 w-8 rounded-full"
                                     src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixqx=8hnVwnWwQD&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </button>
                        </div>
                        <Transition
                            show={dropdown}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <div
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"
                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                <div className="py-1" role="none">
                                    <NavLink to="/"
                                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                             role="menuitem">Profile</NavLink>
                                    <NavLink to="/"
                                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                             role="menuitem">Settings</NavLink>
                                </div>
                                <div className="py-1" role="none">
                                    <button type="button"
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                            role="menuitem"
                                            onClick={handleLogout}>Log out
                                    </button>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropdownSmall;