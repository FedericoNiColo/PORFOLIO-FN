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
                        <p>Soy un apacionado por la tecnología. Comencé a estudiar Diseño Industrial en la UBA.
                            Despues de varios años de carrera y haber realizado proyectos con Arduino
                            comencé a estudiar paralelamente desarrollo web.
                            <br />
                            Actualmente soy Desarrollador Frontend y estoy
                            a 5 materias de terminar la carrera Diseño Industrial.
                            <br />
                            Tengo experiencia laboral en un estudio de Arquitectura. Esta experiencia demuestra mi proactividad,
                            mi adaptabilidad a nuevos retos y las ganas de crecer profesionalmente. 
                            Soy una persona muy responsable, constante, curiosa y estoy dispuesto a aprender nuevas habilidades para adaptarme
                            a la tarea/trabajo que sea necesario para el bien del grupo y del desarrollo personal.
                        </p>

                        <div className='cv'>
                            <select onChange={e => setCv(e.target.value)}>

                                <option value="">Descargar CV</option>
                                <option
                                    value={'/assets/img/CV-Federico Ni Coló.pdf'}
                                >Desarrollador Frontend</option>
                                <option
                                    value={'/assets/img/Federico Ni Coló.pdf'}
                                >Diseñador Industrial</option>

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
