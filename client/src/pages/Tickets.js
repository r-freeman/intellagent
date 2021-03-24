import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Transition} from '@headlessui/react';

import Sidebar from '../components/Sidebar';
import DropdownSmall from '../components/DropdownSmall';
import DropdownLarge from '../components/DropdownLarge';

function Tickets() {
    const {isLoggedIn} = useSelector(state => state.auth);
    const [sidebar, setSidebar] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [actionButton, setActionButton] = useState(false);
    let history = useHistory();

    useEffect(() => {
        if (!isLoggedIn) {
            // redirect unauthenticated users
            history.push('/login');
        }
    }, [isLoggedIn, history]);

    const toggleSidebar = () => setSidebar(!sidebar);
    const toggleDropdown = () => setDropdown(!dropdown);
    const toggleActionButton = () => setActionButton(!actionButton);

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
                        setDropdown={setDropdown}
                    />
                    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
                        <div
                            className="lg:border-b lg:border-gray-200 px-3 py-4 flex items-center justify-between">
                            <div className="lg:flex justify-end w-full hidden">
                                <DropdownLarge
                                    dropdown={dropdown}
                                    toggleDropdown={toggleDropdown}
                                    setDropdown={setDropdown}
                                />
                            </div>
                        </div>
                        <div className="px-4 py-3 w-full space-y-6">
                            <div className="border-b border-gray-200">
                                <div>
                                    <h1 className="text-xl leading-6 font-medium text-gray-900">
                                        Tickets
                                    </h1>
                                    <div className="mt-12">
                                        <nav className="space-x-8">
                                            {/*// <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->*/}
                                            <button type="button"
                                                    className="border-blue-500 text-blue-500 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                                                    aria-current="page">
                                                All
                                            </button>
                                            <button type="button"
                                                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
                                                Unassigned
                                            </button>
                                            <button type="button"
                                                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
                                                Open
                                            </button>
                                            <button type="button"
                                                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
                                                Resolved
                                            </button>
                                        </nav>
                                    </div>
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
                                               className="appearance-none block w-full sm:w-64 pl-10 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                                               placeholder="Search"/>
                                    </div>
                                </div>
                                <div className="relative inline-block text-left">
                                    <div>
                                        <button type="button"
                                                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-400"
                                                id="options-menu" aria-haspopup="true" aria-expanded="true"
                                                onBlur={() => setActionButton(false)}
                                                onClick={() => toggleActionButton()}>
                                            None Selected
                                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd"
                                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <Transition
                                        show={actionButton}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <div
                                            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                                            role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <div className="py-1">
                                                <a href="/"
                                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                   role="menuitem">Edit</a>
                                                <a href="/"
                                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                   role="menuitem">Duplicate</a>
                                            </div>
                                            <div className="py-1">
                                                <a href="/"
                                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                   role="menuitem">Archive</a>
                                                <a href="/"
                                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                   role="menuitem">Move</a>
                                            </div>
                                            <div className="py-1">
                                                <a href="/"
                                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                   role="menuitem">Share</a>
                                                <a href="/"
                                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                   role="menuitem">Add to favorites</a>
                                            </div>
                                            <div className="py-1">
                                                <a href="/"
                                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                   role="menuitem">Delete</a>
                                            </div>
                                        </div>
                                    </Transition>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div
                                            className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        <input id="comments" name="comments" type="checkbox"
                                                               className="focus:ring-blue-400 h-4 w-4 text-blue-500 border-gray-300 rounded"/>
                                                    </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Customer
                                                    </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Message
                                                    </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Status
                                                    </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Last Updated
                                                    </th>
                                                    <th scope="col" className="relative px-6 py-3">
                                                        <span className="sr-only">Actions</span>
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <input id="comments" name="comments" type="checkbox"
                                                               className="focus:ring-blue-400 h-4 w-4 text-blue-500 border-gray-300 rounded"/>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img className="h-10 w-10 rounded-full"
                                                                     src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                                                                     alt=""/>
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    Zoila Gerlach
                                                                </div>
                                                                <div className="text-sm text-gray-500">
                                                                    @zgerlach
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <p className="text-sm font-semibold text-gray-900">
                                                            thinks customers are a joke.. I can't even get in touch
                                                            with a
                                                            real person.. gotta port fosho..
                                                        </p>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                    <span
                                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                      Unassigned
                                                    </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        1d
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <a href="/"
                                                           className="text-indigo-600 hover:text-indigo-900">Actions</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <input id="comments" name="comments" type="checkbox"
                                                               className="focus:ring-blue-400 h-4 w-4 text-blue-500 border-gray-300 rounded"/>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img className="h-10 w-10 rounded-full"
                                                                     src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                                                     alt=""/>
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    Whitney Francis
                                                                </div>
                                                                <div className="text-sm text-gray-500">
                                                                    @wfrancis
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <p className="text-sm text-gray-900">
                                                            I have a question about getting a refund for pay as you
                                                            go
                                                            electricity.
                                                        </p>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                    <span
                                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                      Open
                                                    </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        12h
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <a href="/"
                                                           className="text-indigo-600 hover:text-indigo-900">Actions</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <input id="comments" name="comments" type="checkbox"
                                                               className="focus:ring-blue-400 h-4 w-4 text-blue-500 border-gray-300 rounded"/>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img className="h-10 w-10 rounded-full"
                                                                     src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                                                     alt=""/>
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    Leonard Krasner
                                                                </div>
                                                                <div className="text-sm text-gray-500">
                                                                    @lkrasner
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <p className="text-sm text-gray-900">
                                                            I have a question about getting a refund for pay as you
                                                            go
                                                            electricity.
                                                        </p>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                    <span
                                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                      Resolved
                                                    </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        12h
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <a href="/"
                                                           className="text-indigo-600 hover:text-indigo-900">Actions</a>
                                                    </td>
                                                </tr>

                                                </tbody>
                                            </table>
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