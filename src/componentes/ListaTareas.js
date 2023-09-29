import React from 'react';
import Formulario from './formulario-tareas';
import '../hojasestilo/listatareas.css'
import Tarea from './Tarea';

function ListaTareas() {
    return (
        <>
        <Formulario />
          <div className='lista-tareas-cont'>
            LISTA DE TAREAS
            <Tarea 
            texto={'Dejar de pelotudear'}
            completada={false}/>
          </div>
        </>
    )
}

export default ListaTareas;