import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useHistory} from 'react-router-dom';
import actions from '../redux/actions';
import {Transition} from '@headlessui/react';

import NotificationsPanel from './NotificationsPanel';

function UserMenu({toggleSidebar}) {
    const [userMenu, setUserMenu] = useState(false);
    const [notificationsPanel, setNotificationsPanel] = useState(false);
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    let history = useHistory();

    const handleLogout = () => {
        dispatch(actions.auth.logout());
        history.push('/');
    }

    const toggleUserMenu = () => setUserMenu(!userMenu);
    const toggleNotificationsPanel = () => setNotificationsPanel(!notificationsPanel);

    return (
        <React.Fragment>
            <div
                className="lg:border-b lg:border-gray-200 px-3 py-4 lg:flex items-center justify-between hidden">
                <div className="lg:flex justify-end w-full hidden">
                    <div className="relative inline-block text-left z-10">
                        <div className="inline-flex items-center">
                            <NotificationsPanel
                                notificationsPanel={notificationsPanel}
                                toggleNotificationsPanel={toggleNotificationsPanel}
                                setNotificationsPanel={setNotificationsPanel}
                            />
                            <button type="button"
                                    onBlur={() => setUserMenu(false)}
                                    onClick={toggleUserMenu}
                                    className={`${userMenu ? 'bg-gray-50' : 'hover:bg-gray-50'} inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 -my-1 bg-white text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-400`}
                                    id="options-menu" aria-haspopup="true" aria-expanded="true">
                                <img className="h-8 w-8 rounded-full mr-4"
                                     src={user.photo}
                                     alt={user.name}/>
                                {user.name}
                                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                        </div>
                        <Transition
                            show={userMenu}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <div
                                className="origin-top-right absolute right-0 mt-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"
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
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
                                            role="menuitem"
                                            onClick={handleLogout}>Log out
                                    </button>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
            <div
                className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
                <button
                    className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400 lg:hidden"
                    onClick={toggleSidebar}>
                    <span className="sr-only">Open sidebar</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24"
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
                        <NotificationsPanel
                            notificationsPanel={notificationsPanel}
                            toggleNotificationsPanel={toggleNotificationsPanel}
                        />
                        <div className="relative">
                            <div>
                                <button
                                    onBlur={() => setUserMenu(false)}
                                    onClick={toggleUserMenu}
                                    className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                                    id="user-menu" aria-haspopup="true">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-8 w-8 rounded-full"
                                         src={user.photo}
                                         alt={user.name}/>
                                </button>
                            </div>
                            <Transition
                                show={userMenu}
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
        </React.Fragment>
    )
}

export default UserMenu;