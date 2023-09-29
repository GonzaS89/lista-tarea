import React, {useState} from 'react';
import '../hojasestilo/formulario.css'

function Formulario(props){

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    }

    const manejarEnvio = e =>{
        e.preventDefault();
        const nuevaTarea = {
            id: '111',
            texto: input
        };
        
    }
return(
    <div className='formulario-contenedor'>
        <input
        className='formulario-input'
        type='Text'
        placeholder='Ingrese una tarea'
        onChange={manejarCambio}>
        </input>
        <button 
        className='formulario-boton'
        onClick={manejarEnvio}>Agregar tarea</button>
    </div>
)
}

export default Formulario;