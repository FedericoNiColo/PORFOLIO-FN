
import useProyectosProvider from '@/hooks/useProyectoProvider'


const ProyectoWeb = ({ proyecto }) => {

    const { obtenerProyectoWeb, modificarModalWeb } = useProyectosProvider()
    const { nombre, imagen } = proyecto

    return (


        <div className="tarjeta sombra animate__animated animate__zoomIn">

            <h4 className='nombre-tarjeta'>{nombre}</h4>
            <img src={`/assets/img/${imagen}.png`} alt={`proyecto ${nombre}`} className="fondo-tarjeta" />

            <button
                type='button'
                className='boton-detalles'
                onClick={() => {
                    obtenerProyectoWeb(nombre)
                    modificarModalWeb()
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icono w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>

            </button>

        </div >
    )
}

export default ProyectoWeb
