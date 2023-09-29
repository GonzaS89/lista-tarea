import React from 'react';
import '../hojasestilo/tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({texto,completada}){
    return (
        <div 
        className={ completada? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className='tarea-nombre'>
                {texto}
            </div>
            <div className='tarea-contenedor-iconos'>
            < AiOutlineCloseCircle className='tarea-icono'/>
            </div>
        </div>
)
}

export default Tarea;

