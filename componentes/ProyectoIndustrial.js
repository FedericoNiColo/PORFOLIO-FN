
import useProyectosProvider from '@/hooks/useProyectoProvider'

const ProyectoIndustrial = ({ proyecto }) => {

    const { obtenerProyectoDeDiseño, modificarModalIndustrial } = useProyectosProvider()

    const { nombre, portada } = proyecto

    return (


        <img src={`/assets/img/${portada}.png`} className="bg-white object-cover h-full rounded-md animate__animated animate__zoomIn" />



    )
}

export default ProyectoIndustrial
