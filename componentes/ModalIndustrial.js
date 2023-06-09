import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import useProyectosProvider from '@/hooks/useProyectoProvider'

export default function ModalIndustrial() {

    const { modificarModalIndustrial, modalIndustrial, proyectoIndustrial } = useProyectosProvider()

    const { nombre, url, imagen } = proyectoIndustrial


    return (
        <>
            <Transition appear show={modalIndustrial} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={modificarModalIndustrial}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full lg:w-1/2 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ">
                                    <Dialog.Title
                                        as="h3"
                                        className=" text-start md:text-6xl text-3xl font-medium uppercase leading-6 text-gray-900"
                                    >

                                    </Dialog.Title>
                                   
                                    <div className="">
                                        <img
                                            src={`/assets/img/${imagen}.png`}
                                            width="100%"
                                            height="600"
                                            className='overflow-x-hidden'
                                        ></img>
                                    </div>

                                    <div className="mt-6 flex justify-center gap-10 p-2">

                                        <div
                                            className="flex flex-row justify-end items-center g-3 rounded-md border border-transparent px-4 py-4 text-3xl md:text-4xl font-medium text-gray-900 hover:border-b-emerald-700 hover:border-b-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#B8C674" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="17" y1="7" x2="7" y2="17" />
                                                <polyline points="8 7 17 7 17 16" />
                                            </svg>
                                            <a href={`https://${url}`} target="_blank">Ver proyecto</a>
                                        </div>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
