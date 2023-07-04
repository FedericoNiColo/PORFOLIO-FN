
import useProyectosProvider from '@/hooks/useProyectoProvider'

const ProyectoIndustrial = ({ proyecto }) => {

    const { obtenerProyectoDeDiseño, modificarModalIndustrial } = useProyectosProvider()

    const { imagen, portada } = proyecto

    return (

        <img
            src={`/assets/img/${imagen}.png`}
            className="hover:opacity-80 mr-2 cursor-pointer bg-white object-cover h-full rounded-md animate__animated animate__zoomIn"
            onClick={() => {
                obtenerProyectoDeDiseño(imagen)
                modificarModalIndustrial()
            }}
        />

    )
}

export default ProyectoIndustrial
