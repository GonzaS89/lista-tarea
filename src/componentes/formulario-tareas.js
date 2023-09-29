import React from 'react';
import '../hojasestilo/formulario.css'

function Formulario(props){
return(
    <div className='formulario-contenedor'>
        <input
        className='formulario-input'
        type='Text'
        placeholder='Ingrese una tarea'>
        </input>
        <button 
        className='formulario-boton'>Agregar tarea</button>
    </div>
)
}

export default Formulario;