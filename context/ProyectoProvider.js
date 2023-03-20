import React from "react";
import { useState, useEffect, createContext } from "react";
import axios from "axios";


const ProyectosContext = createContext()

const ProyectosProvider = ({ children }) => {

    const [proyectosWebs, setProyectosWebs] = useState([])
    const [proyectosIndustrial, setProyectosIndustrial] = useState([])
    const [proyectosRenders, setProyectosRenders] = useState([])
    const [cargando, setCargando] = useState(false)
    const [modalWeb, setModalWeb] = useState(false)
    const [modalIndustrial, setModalIndustrial] = useState(false)
    const [proyectoWeb, setProyectoWeb] = useState({})
    const [proyectoIndustrial, setProyectoIndustrial] = useState({})

    useEffect(() => {
        try {

            setCargando(true)
            const llamadosAPI = async () => {

                await obtenerProyectosWebs()
                await obtenerProyectosIndustrial()
                await obtenerProyectosRenders()

                setCargando(false)
                return;
            }

            llamadosAPI()

        } catch (error) {
            console.log(error);
        }
    }, [])

    const obtenerProyectosWebs = async () => {
        const { data } = await axios('/api/webs')
        setProyectosWebs(data);
    }

    const obtenerProyectosIndustrial = async () => {
        const { data } = await axios('/api/industrial')
        setProyectosIndustrial(data);
    }

    const obtenerProyectosRenders = async () => {
        const { data } = await axios('/api/renders')
        setProyectosRenders(data);
    }

    const modificarModalWeb = () => {
        setModalWeb(!modalWeb)
    }

    const modificarModalIndustrial = () => {
        setModalIndustrial(!modalIndustrial)
    }

    const obtenerProyectoWeb = id => {
        const proy = proyectosWebs.find(proyect => (
            proyect.id === id
        ))
        setProyectoWeb(proy);
    }

    const obtenerProyectoDeDiseño = nombre => {
        const proy = proyectosIndustrial.find(proyect => (
            proyect.nombre === nombre
        ))
        setProyectoIndustrial(proy);
    }



    return (

        <ProyectosContext.Provider
            value={{
                proyectosWebs,
                proyectosIndustrial,
                proyectosRenders,
                cargando,
                modalWeb,
                modalIndustrial,
                modificarModalWeb,
                modificarModalIndustrial,
                obtenerProyectoWeb,
                obtenerProyectoDeDiseño,
                proyectoWeb,
                proyectoIndustrial
            }}
        >{children}
        </ProyectosContext.Provider>
    )
}

export {
    ProyectosProvider
}

export default ProyectosContext