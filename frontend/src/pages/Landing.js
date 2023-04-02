import React from 'react';
import Nav from '../components/Nav';

import dashboard from '../assets/images/dashboard.png';
import transistor from '../assets/svg/transistor-logo-gray-400.svg';
import mirage from '../assets/svg/mirage-logo-gray-400.svg';
import tuple from '../assets/svg/tuple-logo-gray-400.svg';
import statickit from '../assets/svg/statickit-logo-gray-400.svg';
import workcation from '../assets/svg/workcation-logo-gray-400.svg';
import peopleWorking from '../assets/images/people-working-on-laptops.jpg';
import workspace1 from '../assets/images/workspace-1.jpg';
import workspace2 from '../assets/images/workspace-2.jpg';
import workspace3 from '../assets/images/workspace-3.jpg';
import portrait1 from '../assets/images/portrait-1.jpg';
import portrait2 from '../assets/images/portrait-2.jpg';
import portrait3 from '../assets/images/portrait-3.jpg';


function Landing() {
    return (
        <div className="bg-white">
            <Nav/>
            <main className="-mt-20 sm:mt-0">
                <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
                    <div
                        className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
                        <div>
                            <div className="mt-20">
                                <div>
                                    <a href="/" className="inline-flex space-x-4">
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
                                               className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-400 focus:ring-blue-400"
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
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                        Trusted customer support partner
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-12" src={tuple}
                                 alt="Tuple"/>
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-12"
                                 src={mirage} alt="Mirage"/>
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-12"
                                 src={statickit}
                                 alt="StaticKit"/>
                        </div>
                        <div
                            className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                            <img className="h-12"
                                 src={transistor}
                                 alt="Transistor"/>
                        </div>
                        <div
                            className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                            <img className="h-12"
                                 src={workcation}
                                 alt="Workcation"/>
                        </div>
                    </div>
                </div>
                <div className="relative bg-gray-900">
                    <div className="h-80 absolute bottom-0 xl:inset-0 xl:h-full xl:w-full">
                        <div className="h-full w-full xl:grid xl:grid-cols-2">
                            <div className="h-full xl:relative xl:col-start-2">
                                <img className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                                     src={peopleWorking}
                                     alt="People working on laptops"/>
                                <div aria-hidden="true"
                                     className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"/>
                            </div>
                        </div>
                    </div>
                    <div
                        className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
                        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                            <h2 className="text-sm font-semibold tracking-wide uppercase">
                                <span
                                    className="text-blue-500">Business Insights</span>
                            </h2>
                            <p className="mt-3 text-3xl font-extrabold text-white">Empower your customer support
                                teams</p>
                            <p className="mt-5 text-lg text-gray-300">Rhoncus sagittis risus arcu erat lectus bibendum.
                                Ut in adipiscing quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce
                                orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh
                                integer quis. Eu vulputate diam sit tellus quis at.</p>
                            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                                <p>
                                    <span className="block text-2xl font-bold text-white">8K+</span>
                                    <span className="mt-1 block text-base text-gray-300"><span
                                        className="font-medium text-white">Companies</span> use laoreet amet lacus nibh integer quis.</span>
                                </p>

                                <p>
                                    <span className="block text-2xl font-bold text-white">25K+</span>
                                    <span className="mt-1 block text-base text-gray-300"><span
                                        className="font-medium text-white">Countries around the globe</span> lacus nibh integer quis.</span>
                                </p>

                                <p>
                                    <span className="block text-2xl font-bold text-white">98%</span>
                                    <span className="mt-1 block text-base text-gray-300"><span
                                        className="font-medium text-white">Customer satisfaction</span> laoreet amet lacus nibh integer quis.</span>
                                </p>

                                <p>
                                    <span className="block text-2xl font-bold text-white">12M+</span>
                                    <span className="mt-1 block text-base text-gray-300"><span
                                        className="font-medium text-white">Issues resolved</span> lacus nibh integer quis.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
                    <div className="relative">
                        <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                            <h2 className="text-base font-semibold tracking-wider text-blue-500 uppercase">Knowledge
                                Base</h2>
                            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                                Helpful Resources
                            </p>
                            <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                                Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis
                                nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
                            </p>
                        </div>
                        <div
                            className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                            <div
                                className="flex flex-col rounded-lg shadow sm:hover:shadow-lg overflow-hidden hover:scale-100 sm:hover:scale-110 transform transition">
                                <div className="flex-shrink-0">
                                    <img className="h-48 w-full object-cover"
                                         src={workspace1}
                                         alt=""/>
                                </div>
                                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-cyan-600">
                                            <a href="/" className="hover:underline">
                                                Article
                                            </a>
                                        </p>
                                        <a href="/" className="block mt-2">
                                            <p className="text-xl font-semibold text-gray-900">
                                                Boost your conversion rate
                                            </p>
                                            <p className="mt-3 text-base text-gray-500">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
                                                accusantium praesentium eius, ut atque fuga culpa, similique sequi cum
                                                eos quis dolorum.
                                            </p>
                                        </a>
                                    </div>
                                    <div className="mt-6 flex items-center">
                                        <div className="flex-shrink-0">
                                            <a href="/">
                                                <span className="sr-only">Roel Aufderehar</span>
                                                <img className="h-10 w-10 rounded-full"
                                                     src={portrait1}
                                                     alt=""/>
                                            </a>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">
                                                <a href="/" className="hover:underline">
                                                    Roel Aufderehar
                                                </a>
                                            </p>
                                            <div className="flex space-x-1 text-sm text-gray-500">
                                                <time dateTime="2020-03-16">
                                                    Mar 16, 2020
                                                </time>
                                                <span aria-hidden="true">
                                                    &middot;
                                                </span>
                                                <span>
                                                    6 min read
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex flex-col rounded-lg shadow sm:hover:shadow-lg overflow-hidden hover:scale-100 sm:hover:scale-110 transform transition">
                                <div className="flex-shrink-0">
                                    <img className="h-48 w-full object-cover"
                                         src={workspace2}
                                         alt=""/>
                                </div>
                                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-cyan-600">
                                            <a href="/" className="hover:underline">
                                                Video
                                            </a>
                                        </p>
                                        <a href="/" className="block mt-2">
                                            <p className="text-xl font-semibold text-gray-900">
                                                How to use search engine optimization to drive sales
                                            </p>
                                            <p className="mt-3 text-base text-gray-500">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis
                                                asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut
                                                inventore optio animi., tempore temporibus quo laudantium.
                                            </p>
                                        </a>
                                    </div>
                                    <div className="mt-6 flex items-center">
                                        <div className="flex-shrink-0">
                                            <a href="/">
                                                <span className="sr-only">Brenna Goyette</span>
                                                <img className="h-10 w-10 rounded-full"
                                                     src={portrait2}
                                                     alt=""/>
                                            </a>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">
                                                <a href="/" className="hover:underline">
                                                    Brenna Goyette
                                                </a>
                                            </p>
                                            <div className="flex space-x-1 text-sm text-gray-500">
                                                <time dateTime="2020-03-10">
                                                    Mar 10, 2020
                                                </time>
                                                <span aria-hidden="true">
                                                    &middot;
                                                </span>
                                                <span>
                                                    4 min read
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex flex-col rounded-lg shadow sm:hover:shadow-lg overflow-hidden hover:scale-100 sm:hover:scale-110 transform transition">
                                <div className="flex-shrink-0">
                                    <img className="h-48 w-full object-cover"
                                         src={workspace3}
                                         alt=""/>
                                </div>
                                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-cyan-600">
                                            <a href="/" className="hover:underline">
                                                Case Study
                                            </a>
                                        </p>
                                        <a href="/" className="block mt-2">
                                            <p className="text-xl font-semibold text-gray-900">
                                                Improve your customer experience
                                            </p>
                                            <p className="mt-3 text-base text-gray-500">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum
                                                rerum voluptatem quo recusandae magni placeat saepe molestiae, sed
                                                excepturi cumque corporis perferendis hic.
                                            </p>
                                        </a>
                                    </div>
                                    <div className="mt-6 flex items-center">
                                        <div className="flex-shrink-0">
                                            <a href="/">
                                                <span className="sr-only">Daniela Metz</span>
                                                <img className="h-10 w-10 rounded-full"
                                                     src={portrait3}
                                                     alt=""/>
                                            </a>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">
                                                <a href="/" className="hover:underline">
                                                    Daniela Metz
                                                </a>
                                            </p>
                                            <div className="flex space-x-1 text-sm text-gray-500">
                                                <time dateTime="2020-02-12">
                                                    Feb 12, 2020
                                                </time>
                                                <span aria-hidden="true">
                                                    &middot;
                                                </span>
                                                <span>
                                                    11 min read
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white">
                    <div
                        className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
                        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">Lorem ipsum dolor sit amet.</span>
                            <span className="block text-blue-500 text-transparent">Start your 14 day trial</span>
                        </h2>
                        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                            <a href="/"
                               className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium text-gray-500 hover:text-gray-900">
                                Learn more
                            </a>
                            <a href="/"
                               className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600">
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-50" aria-labelledby="footerHeading">
                <h2 id="footerHeading" className="sr-only">Footer</h2>
                <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                        Solutions
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        <li>
                                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                                                Marketing
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                                                Analytics
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                                                Commerce
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                                                Insights
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                        Support
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        <li>
                                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                                                Pricing
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                                                Documentation
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                                                Guides
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                                                API Status
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                        Company
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        <li>
                                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                                                About
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                                                Blog
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                                                Jobs
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                                                Press
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                                                Partners
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                        Legal
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        <li>
                                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                                                Claim
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                                                Privacy
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                                                Terms
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 xl:mt-0">
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Subscribe to our newsletter
                            </h3>
                            <p className="mt-4 text-base text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, libero.
                            </p>
                            <form className="mt-4 sm:flex sm:max-w-md">
                                <label htmlFor="emailAddress" className="sr-only">Email address</label>
                                <input type="email" name="emailAddress" id="emailAddress" autoComplete="email" required
                                       className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:placeholder-gray-400"
                                       placeholder="Enter your email"/>
                                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                    <button type="submit"
                                            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div
                        className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
                        <div className="flex space-x-6 md:order-2">
                            <a href="https://twitter.com/intellagenthelp"
                               title="Follow Intellagent on Twitter"
                               className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                </svg>
                            </a>
                            <a href="https://github.com/r-freeman/intellagent-client"
                               title="Check out the source code for this project on GitHub."
                               className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">GitHub</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                          clipRule="evenodd"/>
                                </svg>
                            </a>
                        </div>
                        <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                            &copy; 2021 Intellagent. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Landing;