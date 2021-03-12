import React from 'react';
import Nav from '../components/Nav';

import dashboard from '../assets/images/dashboard.png';
import grayHairedMan from '../assets/images/gray-haired-man.jpg';
import transistor from '../assets/svg/transistor-logo-gray-400.svg';
import mirage from '../assets/svg/mirage-logo-gray-400.svg';
import tuple from '../assets/svg/tuple-logo-gray-400.svg';
import laravel from '../assets/svg/laravel-logo-gray-400.svg';
import statickit from '../assets/svg/statickit-logo-gray-400.svg';
import workcation from '../assets/svg/workcation-logo-gray-400.svg';


function Landing() {
    return (
        <div className="bg-white mb-24">
            <Nav/>
            <main className="-mt-20 sm:mt-0">
                <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
                    <div
                        className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
                        <div>
                            <div className="mt-20">
                                <div>
                                    <a href="#" className="inline-flex space-x-4">
                                <span
                                    className="rounded bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-500 tracking-wide uppercase">
                                  Update
                                </span>
                                        <span
                                            className="inline-flex items-center text-sm font-medium text-blue-500 space-x-1">
                                    <span>What's new in version 0.1.0</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </span>
                                    </a>
                                </div>
                                <div className="mt-6 sm:max-w-xl">
                                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                                        Take control of your customer support
                                    </h1>
                                    <p className="mt-6 text-xl text-gray-500">
                                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                                        cupidatat commodo.
                                    </p>
                                </div>
                                <form action="#" className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                                    <div className="min-w-0 flex-1">
                                        <label htmlFor="hero_email" className="sr-only">Email address</label>
                                        <input id="hero_email" type="email"
                                               className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                               placeholder="Enter your email"/>
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:ml-3">
                                        <button type="submit"
                                                className="block w-full rounded-md border border-transparent px-5 py-3 bg-blue-500 text-base font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 sm:px-10">Notify
                                            me
                                        </button>
                                    </div>
                                </form>
                                <div className="mt-6">
                                    <div className="inline-flex items-center divide-x divide-gray-300">
                                        <div className="flex-shrink-0 flex pr-5">
                                            <svg className="h-5 w-5 text-yellow-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" aria-hidden="true">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                            <svg className="h-5 w-5 text-yellow-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" aria-hidden="true">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                            <svg className="h-5 w-5 text-yellow-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" aria-hidden="true">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                            <svg className="h-5 w-5 text-yellow-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" aria-hidden="true">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                            <svg className="h-5 w-5 text-yellow-400"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" aria-hidden="true">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                        </div>
                                        <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                                            <span className="font-medium text-gray-900">Rated 5 stars</span> by
                                            over <span className="font-medium text-blue-500">500 beta users</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                        <div
                            className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                            <div className="hidden sm:block">
                                <div
                                    className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"/>
                                <svg className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" width="404"
                                     height="392" fill="none" viewBox="0 0 404 392">
                                    <defs>
                                        <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20"
                                                 height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" className="text-gray-200"
                                                  fill="currentColor"/>
                                        </pattern>
                                    </defs>
                                    <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"/>
                                </svg>
                            </div>
                            <div
                                className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                                <img
                                    className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                                    src={dashboard} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mt-20">
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                        <div className="relative sm:py-16 lg:py-0">
                            <div aria-hidden="true"
                                 className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                                <div
                                    className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"/>
                                <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                                     width="404" height="392" fill="none" viewBox="0 0 404 392">
                                    <defs>
                                        <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20"
                                                 height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" className="text-gray-200"
                                                  fill="currentColor"/>
                                        </pattern>
                                    </defs>
                                    <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"/>
                                </svg>
                            </div>
                            <div
                                className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                                <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                                    <img className="absolute inset-0 h-full w-full object-cover"
                                         src={grayHairedMan}
                                         alt=""/>
                                    <div className="absolute inset-0 bg-blue-500" style={{mixBlendMode: 'multiply'}}/>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-blue-500 via-blue-500 opacity-80"/>
                                    <div className="relative px-8">
                                        <div className="h-12">

                                        </div>
                                        <blockquote className="mt-8">
                                            <div className="relative text-lg font-medium text-white md:flex-grow">
                                                <svg
                                                    className="absolute top-0 left-0 transform -translate-y-16 h-12 w-12 text-blue-400"
                                                    fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                                    <path
                                                        d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                                                </svg>
                                                <p className="relative">
                                                    Tincidunt integer commodo, cursus etiam aliquam neque, et.
                                                    Consectetur pretium in volutpat, diam. Montes, magna cursus
                                                    nulla feugiat dignissim id lobortis amet.
                                                </p>
                                            </div>
                                            <footer className="mt-4 inline-flex items-center">
                                                <p className="text-base font-semibold text-blue-100 mr-2">Walter
                                                    Armstrong,
                                                    CEO</p>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                            <div className="pt-12 sm:pt-16 lg:pt-20">
                                <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                                    Empower your support teams
                                </h2>
                                <div className="mt-6 text-gray-500 space-y-6">
                                    <p className="text-lg">
                                        Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
                                        consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu
                                        morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae
                                        fames senectus vitae.
                                    </p>
                                    <p className="text-base leading-7">
                                        Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum.
                                        Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec
                                        laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat
                                        turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec
                                        ut volutpat donec laoreet quam urna.
                                    </p>
                                    <p className="text-base leading-7">
                                        Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel
                                        ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis
                                        vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec,
                                        a. Morbi enim fermentum lacus in. Viverra.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                                    <div className="border-t-2 border-gray-100 pt-6">
                                        <dt className="text-base font-medium text-gray-500">Founded</dt>
                                        <dd className="text-3xl font-extrabold tracking-tight text-gray-900">2021</dd>
                                    </div>

                                    <div className="border-t-2 border-gray-100 pt-6">
                                        <dt className="text-base font-medium text-gray-500">Employees</dt>
                                        <dd className="text-3xl font-extrabold tracking-tight text-gray-900">5</dd>
                                    </div>

                                    <div className="border-t-2 border-gray-100 pt-6">
                                        <dt className="text-base font-medium text-gray-500">Beta Users</dt>
                                        <dd className="text-3xl font-extrabold tracking-tight text-gray-900">521</dd>
                                    </div>

                                    <div className="border-t-2 border-gray-100 pt-6">
                                        <dt className="text-base font-medium text-gray-500">Raised</dt>
                                        <dd className="text-3xl font-extrabold tracking-tight text-gray-900">$25M</dd>
                                    </div>
                                </dl>
                                <div className="mt-10">
                                    <a href="#" className="text-base font-medium text-blue-500 hover:text-blue-600">
                                        Learn more about how we're changing the world &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-32">
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                            <div>
                                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                                    Backed by world-renowned investors
                                </h2>
                                <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
                                    consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
                                    Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                                    senectus vitae.
                                </p>
                                <div className="mt-6">
                                    <a href="#" className="text-base font-medium text-blue-500 hover:text-blue-600">
                                        Meet our investors and advisors &rarr;
                                    </a>
                                </div>
                            </div>
                            <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                                <div className="col-span-1 flex justify-center py-8 px-8">
                                    <img className="max-h-12"
                                         src={transistor}
                                         alt="Transistor"/>
                                </div>
                                <div className="col-span-1 flex justify-center py-8 px-8">
                                    <img className="max-h-12"
                                         src={mirage}
                                         alt="Mirage"/>
                                </div>
                                <div className="col-span-1 flex justify-center py-8 px-8">
                                    <img className="max-h-12"
                                         src={tuple}
                                         alt="Tuple"/>
                                </div>
                                <div className="col-span-1 flex justify-center py-8 px-8">
                                    <img className="max-h-12"
                                         src={laravel}
                                         alt="Laravel"/>
                                </div>
                                <div className="col-span-1 flex justify-center py-8 px-8">
                                    <img className="max-h-12"
                                         src={statickit}
                                         alt="StaticKit"/>
                                </div>
                                <div className="col-span-1 flex justify-center py-8 px-8">
                                    <img className="max-h-12"
                                         src={workcation}
                                         alt="Workcation"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Landing;