/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { useState, useEffect} from 'react'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    
    const [actives, setActive]= useState(false);



    return (
        <div class="relative">
        <div class="fixed top-0 left-0 right-0">
        <Disclosure as="nav" className="bg-white dark:bg-gray-800 ">
        {({ open }) => (
            <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
                <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center dark:text-white justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                    </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start dark:text-white">
                    <div className="flex-shrink-0 flex items-center">
                    <img
                        className="block lg:hidden h-8 w-auto"
                        src="https://github.com/jevonadelwin7/J5-CARD/blob/gh-pages/j5logo.png"
                        alt="Workflow"
                    />
                    <img
                        className="hidden lg:block h-8 w-auto"
                        src="https://github.com/jevonadelwin7/J5-CARD/blob/gh-pages/j5logo.png"
                        alt="Workflow"
                    />
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                        
                    </div>
                    </div>
                </div>
                
                </div>
            </div>


            <Disclosure.Panel className="sm:hidden">
                
            </Disclosure.Panel>
            </>
        )}
        </Disclosure>
        </div>
        </div>
       
    )
}
