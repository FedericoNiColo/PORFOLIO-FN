
import useProyectosProvider from '@/hooks/useProyectoProvider'
import ProyectoWeb from './ProyectoWeb'
import ProyectoIndustrial from './ProyectoIndustrial'
import ModalIndustrial from './ModalIndustrial'
import ModalWebs from './ModalWebs'
import { useState } from 'react'
import MasProyectos from './MasProyectos'

const Trabajos = () => {

    const { proyectosWebs, modalWeb, proyectosRenders, proyectosIndustrial, modalIndustrial } = useProyectosProvider()
    const [trabajos, setTrabajos] = useState('Desarrollo web')


    proyectosWebs.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    })
    proyectosIndustrial.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    })

    return (
        <>
            <section id="trabajos" className="mt-12 trabajos animate__animated animate__zoomIn">
                <div className='w-full flex items-center justify-center p-0 mb-24 mt-10'>
                    <button
                        className={`${trabajos === 'Desarrollo web' ? 'text-secundary font-semibold bg-gray' : 'text-gray bg-gray2'} 
                    text-4xl p-8 h-full  shadow-xl rounded-l-xl`}
                        onClick={() => setTrabajos('Desarrollo web')}
                    >
                        Desarrollo web
                    </button>
                    <button
                        className={`${trabajos === 'Diseño y Renders' ? 'text-secundary font-semibold bg-gray' : 'text-gray bg-gray2'} 
                    text-4xl p-8 h-full shadow-xl rounded-r-xl`}
                        onClick={() => setTrabajos('Diseño y Renders')}
                    >
                        Diseño y Renders
                    </button>
                </div>

                <article className=" webs subtitulo xl:max-w-[75%] max-w-[95%] mx-auto">
                    {modalWeb && <ModalWebs />}
                    {modalIndustrial && <ModalIndustrial />}
                    <h3 className="blanco sub">{trabajos}</h3>

                    {trabajos === 'Desarrollo web' && (
                        <div className="sm:grid sm:grid-cols-3 2xl:grid-cols-4 sm:gap-2 w-full">
                            {proyectosWebs.length > 0 &&
                                proyectosWebs.map(proyecto => (
                                    <ProyectoWeb
                                        key={proyecto.id}
                                        proyecto={proyecto}
                                    />
                                ))}
                        </div>)
                    }
                    {trabajos === 'Diseño y Renders' && (
                        <>
                            <div className="sm:grid sm:grid-cols-3 2xl:grid-cols-4 sm:gap-4 w-full">
                                {proyectosIndustrial.length > 0 &&
                                    proyectosIndustrial.map(proyecto => (
                                        <ProyectoIndustrial
                                            key={proyecto.id}
                                            proyecto={proyecto}
                                        />
                                    ))}
                            </div>
                        </>
                    )}
                </article>


            </section>
            <article className="w-full  bg-gray2  py-20 2xl:py-36  ">

                <div className='sm:border-l-4 sm:border-secundary xl:max-w-[75%] max-w-[95%] mx-auto'>

                    <div className="sm:grid sm:grid-cols-6 sm:gap-2 flex sm:p-4 overflow-x-auto h-72">

                        {trabajos === 'Desarrollo web' && (
                            proyectosIndustrial.map(proyecto => (
                                <MasProyectos
                                    key={proyecto.id}
                                    imagen={proyecto.portada}
                                />
                            )))}
                        {trabajos === 'Diseño y Renders' && (
                            proyectosWebs.map(proyecto => (
                                <MasProyectos
                                    key={proyecto.id}
                                    imagen={proyecto.imagen}
                                />
                            )))}
                    </div>
                </div>

            </article>
        </>
    )
}

export default Trabajos
