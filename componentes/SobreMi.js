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
                            <br />
                            Soy un profesional altamente versátil con una sólida formación como Desarrollador Frontend especializado en React y Diseñador Industrial.
                            Mi carrera se ha caracterizado por adaptarme y destacarme en diversos entornos laborales, demostrando una habilidad excepcional para fusionar mis conocimientos técnicos y creativos en áreas diversas.
                            <br />
                            <br />
                            Estoy entusiasmado por seguir explorando nuevas oportunidades que me desafíen a aplicar y ampliar mis habilidades técnicas y creativas en diversos ámbitos.
                            Mi capacidad para aprender rápidamente y adaptarme a entornos cambiantes me ha permitido sobresalir en cada proyecto y rol que he desempeñado.
                        
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
