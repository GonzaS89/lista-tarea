import React, {useState} from 'react';
import Formulario from './formulario-tareas';
import '../hojasestilo/listatareas.css'
import Tarea from './Tarea';

function ListaTareas() {

  const [tareas, setTareas] = useState ([]);

  const agregarTarea = tarea => {

    console.log(tarea)

    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }

    
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas (tareasActualizadas);
  }
  const completarTarea = id => {
    const tareasActualizadas = tareas.map (tarea => {
      if(tarea.id === id){
        tarea.completada = true;
      }
      return tarea;
    });
    setTareas (tareasActualizadas);
  }
    return (
        <>
        <Formulario onSubmit ={agregarTarea}/>
          <div className='lista-tareas-cont'>
            LISTA DE TAREAS
            
            {
              tareas.map( (tarea) => 
                <Tarea
                key={tarea.id}
                id={tarea.id} 
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea}/>
              )
            }
          </div>
        </>
    )
}

export default ListaTareas;