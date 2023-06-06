
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
        <section id="trabajos" className="trabajos animate__animated animate__zoomIn">
            <article className="webs subtitulo">
                {modalWeb && <ModalWebs />}
                <h3 className="blanco sub">Desarrollo Web</h3>

                <div className="tarjetas-webs">
                    {proyectosWebs.length > 0 &&
                        proyectosWebs.map(proyecto => (
                            <ProyectoWeb
                                key={proyecto.id}
                                proyecto={proyecto}
                            />
                        ))}
                </div>
            </article>


            <article className="webs subtitulo">
                {modalIndustrial && <ModalIndustrial />}
                <h2 className="blanco">proyectos realizados en la universidad</h2>
                <h3 className="blanco sub">Diseño Industrial</h3>

                <div className="tarjetas-webs">
                    {proyectosIndustrial.length > 0 &&
                        proyectosIndustrial.map(proyecto => (
                            <ProyectoIndustrial
                                key={proyecto.id}
                                proyecto={proyecto}
                            />
                        ))}
                </div>
            </article>


            <article className="renders subtitulo">
                <h2 className="blanco">proyectos realizados en estudio de arquitectura Armendariz-Zabaleta</h2>
                <h3 className="blanco sub">renders</h3>

                <div className="imagenes">
                    {proyectosRenders.map(render => (
                        <img src={`/assets/img/${render.imagen}.png`} alt="" key={`${render.imagen}`} className={`${render.clase} img sombra animate__animated animate__zoomIn`} />
                    ))}
                </div>

                <a href="https://www.behance.net/gallery/132177317/Portfolio-Personal" className="vermas" target="_blank">ver más...</a>

            </article>
        </section>
    )
}

export default Trabajos
