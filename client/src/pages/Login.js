import React from 'react';
import logo from '../svg/logo.svg';

function Login() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:-mt-24 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="py-8 px-4 sm:px-10 shadow rounded-lg bg-white">
                    <img src={logo}
                         className="mx-auto h-16 w-auto"
                         alt="Intellagent"/>
                    <div className="my-8">
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Log in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 max-w">
                            Or <a href="#" className="font-medium text-blue-500 hover:text-blue-600">start your
                            14-day
                            free
                            trial</a>
                        </p>
                    </div>
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                <span className="sr-only">Email address</span>
                            </label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="email" required
                                       placeholder="Email"
                                       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                <span className="sr-only">Password</span>
                            </label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" autoComplete="current-password"
                                       required
                                       placeholder="Password"
                                       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"/>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox"
                                       className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"/>
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-500 hover:text-blue-600">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;