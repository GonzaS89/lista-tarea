import './App.css';
import Tarea from './componentes/Tarea';
import Formulario from './componentes/formulario-tareas';

function App() {
  return (
    <div className='contenedor-principal'>
        <div className='tareas-contenedor'>
            <Formulario />
            <Tarea 
            texto='Dejar de pelotudear'
            completada = {false}/>
        </div>
    </div>
  );
}

export default App;
