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
                        <p>Soy un apasionado por la tecnología.
                            <br />
                            Llevo varios años preparándome en esta área.Actualmente soy Desarrollador Frontend especializado en React y cuento con sólidos conocimientos y herramientas
                            de diseño ya que tambien soy Diseñador Industrial recibido en la UBA.
                            <br />
                            Soy un profesional altamente motivado, orientado a resultados y siempre en búsqueda de nuevos desafíos.
                            Mi capacidad para aprender rápidamente y adaptarme a entornos cambiantes me ha permitido obtener excelentes
                            resultados.
                        </p>

                        <div className='cv'>
                            <select onChange={e => setCv(e.target.value)}>

                                <option value="">Descargar CV</option>
                                <option
                                    value={'/assets/img/CV-Federico Ni Coló.pdf'}
                                >Desarrollador Frontend</option>

                            </select>

                            {cv.length > 0 && <a href={`${cv}`} className="vermas-cv" target="_blank">Ver</a>}
                        </div>
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
