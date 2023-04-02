import React from 'react';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

function MessagePanel() {
    return (
        <div className="w-full xl:w-2/3">
            <section>
                <div
                    className="mt-4 bg-white sm:rounded-lg shadow rounded-lg">
                    <div
                        className="p-4 bg-white border-b border-gray-200">
                        <div className="flex justify-between items-center">
                            <h3
                                className="text-base leading-6 font-medium text-gray-900 mr-2">
                                Message history
                            </h3>

                            <div className="relative z-0 inline-flex shadow-sm rounded-md group">
                                <button type="button"
                                        className="relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                                    <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                         fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    Email transcript
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pt-5 max-h-96 overflow-y-auto">
                        <ul className="block">
                            <MessageList/>
                        </ul>
                    </div>
                    <MessageInput/>
                </div>
            </section>
        </div>
    )
}

export default MessagePanel;