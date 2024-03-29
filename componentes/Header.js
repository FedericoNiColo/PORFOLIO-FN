import React from 'react'
import Image from 'next/image'


const Header = () => {
    return (
        <>
            <div className="principal sombra animate__animated animate__zoomIn">
                <header>
                    <nav className="navegacion">
                        <a href="#sobre-mi">Sobre mí</a>
                        <a href="#trabajos">Trabajos</a>
                        <a href="#contacto">Contacto</a>
                    </nav>
                </header>

                <div className='contenido-principal'>
                    <div class="area" >
                        <ul class="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div >
                    <div className="saludo animate__animated animate__backInLeft">
                        <h2 className='text-center'>Hola, mi nombre es</h2>
                        <h1 className='text-center'>Federico Ni Coló
                        </h1>
                        <div className='profesiones'>
                            <p>Desarrollador Front-End React </p>
                            <p>Diseñador Industrial</p>
                        </div>
                    </div>

                </div>


                <div className='contacto'>

                    <div className='contenedor-icono'>
                        <a href='https://api.whatsapp.com/send?phone=542345499481&text=%F0%9F%91%8B' target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp icono-hover" width="32"
                                height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                <path
                                    d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                            </svg>
                        </a>
                    </div>
        
                    <div className='contenedor-icono'>
                        <a href="https://github.com/FedericoNiColo?tab=repositories" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github icono-hover" width="32"
                                height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#201E2A" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                        </a>
                    </div>

                    <div className='contenedor-icono'>
                        <a href="https://www.linkedin.com/in/federico-ni-col%C3%B3-61b1011b8/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin icono-hover" width="32"
                                height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#201E2A" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <line x1="8" y1="11" x2="8" y2="16" />
                                <line x1="8" y1="8" x2="8" y2="8.01" />
                                <line x1="12" y1="16" x2="12" y2="11" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </svg>
                        </a>
                    </div>

                    <div className='contenedor-icono'>
                        <a href='mailto:fedenicolo25@gmail.com' target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail icono-hover" width="32" height="32"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="#201E2A" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header
