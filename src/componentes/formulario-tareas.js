import React, {useState} from 'react';
import '../hojasestilo/formulario.css'
import { v4 as uuidv4} from 'uuid'

function Formulario(props){

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
        
    }

    const manejarEnvio = e =>{
        e.preventDefault();

        const nuevaTarea = {
            id: uuidv4(),
            texto: input,
            completada : false
        };

       props.onSubmit(nuevaTarea)
        
    }
return(
    <div className='formulario-contenedor'
    onSubmit={manejarEnvio}>
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