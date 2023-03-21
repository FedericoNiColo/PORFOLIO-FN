import React from "react";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { diseñoindustrial } from "@/ProyectosIndustrial";
import { webs } from "@/ProyectosWeb";
import { renders } from "@/Renders";


const ProyectosContext = createContext()

const ProyectosProvider = ({ children }) => {

    const [proyectosWebs, setProyectosWebs] = useState(webs)
    const [proyectosIndustrial, setProyectosIndustrial] = useState(diseñoindustrial)
    const [proyectosRenders, setProyectosRenders] = useState(renders)
    const [cargando, setCargando] = useState(false)
    const [modalWeb, setModalWeb] = useState(false)
    const [modalIndustrial, setModalIndustrial] = useState(false)
    const [proyectoWeb, setProyectoWeb] = useState({})
    const [proyectoIndustrial, setProyectoIndustrial] = useState({})

    useEffect(() => {

        setCargando(true)

        setTimeout(() => {
            setCargando(false)

        }, 4000);
        /*  try {
 
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
         } */
    }, [])

    /*    const obtenerProyectosWebs = async () => {
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
    */
    const modificarModalWeb = () => {
        setModalWeb(!modalWeb)
    }

    const modificarModalIndustrial = () => {
        setModalIndustrial(!modalIndustrial)
    }

    const obtenerProyectoWeb = nombre => {
        const proy = proyectosWebs.find(proyect => (
            proyect.nombre === nombre
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