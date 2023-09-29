import './App.css';
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <div className='contenedor-principal'>
      <div className='tareas-contenedor'>
        <h1 className='titulo-tareas'>Mis Tareas</h1>
      <ListaTareas />
      </div>
    </div>
  );
}

export default App;
