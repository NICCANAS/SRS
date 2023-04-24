import {connect} from'react-redux'
import { Popover, Transition } from '@headlessui/react'
import {useState, Fragment, useEffect } from 'react'
import {NavLink,Link} from 'react-router-dom'
import DotLoader from 'react-spinners/DotLoader'
function Navbar() {
    return(
<nav data-scroll data-scroll-id="hey" id='navbar' className='w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed'>
            <div className="px-4 sm:px-6">
                <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2 font-mono">
                    Secure Recruitment Services 
                    <div className="ml-4 mt-2 flex-shrink-0">
                    
                    <Link to="#"className="inline-flex ml-12 items-center rounded-md border bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2  focus:ring-offset-2 bg-sky-600">
                        Iniciar sesión
                    </Link> 
                    </div>
                </div>
                <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2">
                    <img
                        src={'https://bafybeiczl4dcxupma2zeyilkukfl4yge64axnhajd722wxgin62mtts6uy.ipfs.w3s.link/murkivamarketing.png'}
                        width={160}
                        height={160}
                        className=""
                    />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">

                    
                    <Popover className="relative">
                        {({ open }) => (
                        <>
                            <Popover.Button
                            className={`
                                ${open ? '' : 'text-opacity-90'}
                                focus:ring-none focus:outline-none`}
                            >
                            {
                                open ?
                                <i  className='bx bx-x text-4xl'></i>
                                :
                                <i  className='bx bx-menu text-4xl'></i>
                            }
                            </Popover.Button>

                            <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                            >
                            <Popover.Panel className="absolute -left-32 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">

                                </div>
                                <div className="bg-gray-50 p-4">
                                    <a
                                    href="##"
                                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                    >
                                    <span className="flex items-center">
                                        <span className="text-sm font-medium text-gray-900">
                                        Documentation
                                        </span>
                                    </span>
                                    <span className="block text-sm text-gray-500">
                                        Start integrating products and tools
                                    </span>
                                    </a>
                                </div>
                                </div>
                            </Popover.Panel>
                            </Transition>
                        </>
                        )}
                    </Popover>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps,{
    
})(Navbar)