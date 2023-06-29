
import useProyectosProvider from '@/hooks/useProyectoProvider'
import ProyectoWeb from './ProyectoWeb'
import ProyectoIndustrial from './ProyectoIndustrial'
import ModalIndustrial from './ModalIndustrial'
import ModalWebs from './ModalWebs'

const Trabajos = () => {

    const { proyectosWebs, modalWeb, proyectosRenders, proyectosIndustrial, modalIndustrial } = useProyectosProvider()

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

                <article className=" webs subtitulo xl:max-w-[75%] max-w-[95%] mx-auto">
                    {modalWeb && <ModalWebs />}
                    <h3 className="blanco sub">Desarrollo Web</h3>

                    <div className="sm:grid sm:grid-cols-3 2xl:grid-cols-4 sm:gap-2 w-full">
                        {proyectosWebs.length > 0 &&
                            proyectosWebs.map(proyecto => (
                                <ProyectoWeb
                                    key={proyecto.id}
                                    proyecto={proyecto}
                                />
                            ))}
                    </div>
                </article>


            </section>
            <article className="w-full  bg-gray2  py-20 2xl:py-36  ">
                <div className='sm:border-l-4 sm:border-secundary xl:max-w-[75%] max-w-[95%] mx-auto'>

                    <h3 className="sm:text-6xl text-5xl font-semibold mb-4 sm:ml-6 text-gray">Diseño industrial y renders</h3>

                    <div className="sm:grid sm:grid-cols-6 sm:gap-2 flex  overflow-x-auto">

                        {proyectosIndustrial.length > 0 &&
                            proyectosIndustrial.map(proyecto => (
                                
                                    <ProyectoIndustrial
                                        key={proyecto.id}
                                        proyecto={proyecto}
                                    />
                               
                            ))}

                    </div>
                    <a href="https://www.behance.net/federiconicol1" className="vermas mt-4 sm:ml-6" target="_blank">ver más</a>
                </div>


                {/* <article className="renders ">


<div className="imagenes">
{proyectosRenders.map(render => (
    <img src={`/assets/img/${render.imagen}.png`} alt="" key={`${render.imagen}`} className={`${render.clase} img sombra animate__animated animate__zoomIn`} />
    ))}
    </div>
    
    
</article>*/}
            </article>
        </>
    )
}

export default Trabajos
