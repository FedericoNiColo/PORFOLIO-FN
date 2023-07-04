import React from 'react'

export default function MasProyectos({ imagen }) {
    return (
        <img
            src={`/assets/img/${imagen}.png`}
            className="hover:opacity-80 mr-2 cursor-pointer bg-white object-cover h-full rounded-md animate__animated animate__zoomIn"
            onClick={() => {

            }} />
    )
}
