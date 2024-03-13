import { useState } from 'react';
import { habilidades } from '@/habilidades';
import Image from 'next/image';


const SobreMi = () => {

    const [cv, setCv] = useState('')

    return (
        <section id="sobre-mi" className='animate__animated animate__zoomIn'>
            <div className='contenedor-sobreMi'>
                <div className="sobre-mi">

                    <img src="/assets/img/presentacion.png" alt="foto personal" className="foto-personal" />

                    <div className="parrafo-sobremi animate__flipInX">
                        <h2 >sobre mí</h2>
                        <p>¡Hola, soy Federico!
                            <br />
                            Apasionado por la tecnología, soy un Desarrollador Frontend especializado en React y Diseñador Industrial graduado de la UBA.
                             Mi mayor motivación radica en explorar y dominar nuevas tecnologías, siempre dispuesto a ampliar mi área de aplicación y conocimientos para crecer profesionalmente.
                            <br />
                            Mi compromiso con el aprendizaje continuo me impulsa a abordar desafíos que me permitan expandir mis habilidades y enfrentar proyectos innovadores. 
                            Con una mentalidad abierta y una pasión por la tecnología, estoy listo para sumergirme en cualquier área relacionada y aprender todo lo necesario para alcanzar mis metas.
                        
                            <br />
                            Estoy entusiasmado por seguir explorando oportunidades que me desafíen a crecer y evolucionar en el campo tecnológico. 
                            Siempre abierto a nuevas experiencias y aprendizajes, estoy seguro de que mi dedicación y mi espíritu de aprendizaje continuo serán activos valiosos en cualquier entorno.
                        </p>

                        {/* <div className='cv'>
                            <select onChange={e => setCv(e.target.value)}>

                                <option value="">Descargar CV</option>
                                <option
                                    value={'/assets/img/CV-Federico Ni Coló.pdf'}
                                >Desarrollador Frontend</option>

                            </select>

                            {cv.length > 0 && <a href={`${cv}`} className="vermas-cv" target="_blank">Ver</a>}
                        </div> */}
                    </div>
                </div>

                <div className="habilidades">

                    <div className="subtitulo-habilidades">
                        <h2 className="sub-habilidades">habilidades: <span>diseño y programación</span> </h2>
                    </div>

                    <div className="contenedor-habilidades animate__animated animate__zoomIn">
                        {habilidades.length > 0 && habilidades.map(habilidad => (
                            <img src={`/assets/img/${habilidad.imagen}.png`} alt={`icono ${habilidad.imagen}`} className="icono-habilidades" key={Math.random()} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SobreMi
