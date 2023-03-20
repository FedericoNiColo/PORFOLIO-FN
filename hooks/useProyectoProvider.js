import { useContext } from "react"
import ProyectosContext from '../context/ProyectoProvider'

const useProyectosProvider = () => {
    return useContext(ProyectosContext)
}

export default useProyectosProvider