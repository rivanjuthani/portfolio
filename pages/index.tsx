import React, { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import Head from 'next/head'

const navigation = []

const contactDetails = [
    { name: 'Say hello', email: 'rjuthani@umass.edu' },
    { name: 'Collaborate', email: 'rjuthani+collaboration@umass.edu' },
    { name: 'Press', email: 'rjuthani+press@umass.edu' },
]

const footernavigation = [
    {
        name: 'Instagram',
        href: 'https://instagram.com/rivanjuthani',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'GitHub',
        href: 'https://github.com/rivanjuthani',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/rivanjuthani',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
]

export default function Home() {
    const [age, setAge] = useState<any>();

    useEffect(() => {
        const calculatedAge = ((Date.now() - +new Date("06/28/2004")) / (60 * 60 * 24 * 365 * 1000))
            .toString()
            .split(".")[0];

        setAge(calculatedAge);
    }, []);

    return (
        <div className="min-h-screen">
            <Head>
                <title>Rivan Juthani - Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="security? everyone wants security." />
                <meta name="og:title" content='Rivan Juthani - Portfolio' />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className="relative overflow-hidden">
                <Popover as="header" className="relative">
                    {({ open }) => (
                        <>
                            <div className="bg-gray-900 pt-6">
                                <nav
                                    className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                                    aria-label="Global"
                                >
                                    <div className="flex items-center flex-1">
                                        <div className="flex items-center justify-between w-full md:w-auto">
                                            <a href="#">
                                                <span className="sr-only">Workflow</span>
                                                <img
                                                    className="h-8 w-auto sm:h-10"
                                                    src="/images/logo.png"
                                                    alt=""
                                                />
                                            </a>
                                            <div className="-mr-2 flex items-center md:hidden">
                                                <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                                                    <span className="sr-only">Open main menu</span>
                                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="hidden space-x-8 md:flex md:ml-10">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="text-base font-medium text-white hover:text-gray-300"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="hidden md:flex md:items-center md:space-x-6">
                                        <a href="https://mail.google.com/" className="text-base font-medium text-white hover:text-gray-300 hidden">
                                            Log in
                                        </a>
                                    </div>
                                </nav>
                            </div>

                            <Transition
                                show={open}
                                as={Fragment}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    static
                                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
                                >
                                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="px-5 pt-4 flex items-center justify-between">
                                            <div>
                                                <img
                                                    className="h-8 w-auto"
                                                    src="/images/logo.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                                                    <span className="sr-only">Close menu</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="pt-5 pb-6">
                                            <div className="px-2 space-y-1">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                            <div className="mt-6 px-5">
                                                <p className="text-center text-base font-medium text-gray-500">
                                                    Have an account?{' '}
                                                    <a href="https://mail.google.com/" className="text-gray-900 hover:underline">
                                                        Login
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>

                <main>
                    <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                        <div className="mx-auto max-w-7xl lg:px-8">
                            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                                    <div className="lg:py-24">
                                        <a
                                            href="mailto:rjuthani@umass.edu?subject=Hey!"
                                            className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                                        >
                                            <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                                                Contact me
                                            </span>
                                            <span className="ml-4 text-sm">Click to email me</span>
                                            <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                                        </a>
                                        <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                            <span className="block">Innovating technologies which</span>{' '}
                                            <span className="block text-indigo-400">provide value</span>
                                        </h1>
                                        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                            Hi, I'm Rivan! I'm a {age} year old full-stack engineer with an interest in cybersecurity, reverse engineering, and machine learning. I've also worked on many websites, private discord/telegram bots, and APIs which have been used by hundreds of people.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                        {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                                        <img
                                            className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                            src="/images/code.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900">
                        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                            <p className="text-center text-base font-semibold uppercase text-gray-300 tracking-wider">
                                My favorite technologies right now
                            </p>
                            <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                                <div className="col-span-1 flex justify-center py-8 px-8 bg-indigo-50">
                                    <img className="max-h-12" src="/images/nextjs.png" alt="Next.JS" />
                                </div>
                                <div className="col-span-1 flex justify-center py-8 px-8 bg-indigo-50">
                                    <img className="max-h-12" src="/images/bun.png" alt="Bun" />
                                </div>
                                <div className="col-span-1 flex justify-center py-8 px-8 bg-indigo-50">
                                    <img className="max-h-12" src="/images/golang.png" alt="Golang" />
                                </div>
                                <div className="col-span-1 flex justify-center py-8 px-8 bg-indigo-50">
                                    <img className="max-h-12" src="/images/nodejs.png" alt="Node.JS" />
                                </div>
                                <div className="col-span-1 flex justify-center py-8 px-8 bg-indigo-50">
                                    <img className="max-h-12" src="/images/python.png" alt="Python" />
                                </div>
                                <div className="col-span-1 flex justify-center py-8 px-8 bg-indigo-50">
                                    <img className="max-h-12" src="/images/typescript.png" alt="Typescript" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900">
                        <div className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="divide-y divide-warm-gray-200">
                                <section className="lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="contactHeading">
                                    <h2 id="contactHeading" className="text-2xl font-extrabold text-white sm:text-3xl">
                                        Get in touch
                                    </h2>
                                    <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                                        {contactDetails.map((item) => (
                                            <div key={item.name}>
                                                <h3 className="text-lg font-medium text-white">{item.name}</h3>
                                                <dl className="mt-2 text-base text-white">
                                                    <div>
                                                        <dt className="sr-only">Email</dt>
                                                        <dd>{item.email}</dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900">
                        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
                            <div className="lg:w-0 lg:flex-1">
                                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="newsletter-headline">
                                    Sign up for updates
                                </h2>
                                <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
                                Join my mailing list to get a behind-the-scenes look at my creative process, be the first to see my latest projects, and receive exclusive updates and inspiration!
                                </p>
                            </div>
                            <div className="mt-8 lg:mt-0 lg:ml-8">
                                <form action="https://rivanjuthani.us6.list-manage.com/subscribe/post?u=0b8f00e661ea9a0b7f8a861f0&amp;id=ea488a4f3f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" className="sm:flex">
                                    <label htmlFor="emailAddress" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="mce-EMAIL"
                                        name="EMAIL"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                                        placeholder="Enter your email"
                                    />
                                    <input type="text" name="b_0b8f00e661ea9a0b7f8a861f0_ea488a4f3f" value="" className="hidden" readOnly />
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                                        >
                                            Notify me
                                        </button>
                                    </div>
                                </form>
                                <p className="mt-3 text-sm text-gray-300">
                                    We care about the protection of your data. Read Mailchimp's{' '}
                                    <a href="https://mailchimp.com/legal/privacy/" target="_blank" className="text-white font-medium underline">
                                        Privacy Policy.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="bg-gray-800">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                        <div className="flex justify-center space-x-6 md:order-2">
                            {footernavigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                        <div className="mt-8 md:mt-0 md:order-1">
                            <p className="text-center text-base text-gray-400">&copy; 2021 Rivan Juthani All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
