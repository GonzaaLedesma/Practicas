import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');
  const [tareas, setTareas] = useState([]);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const manejarCambioNombre = (event) => {
    setNombre(event.target.value);
  };

  const agregarTarea = () => {
    if (nombre.trim() !== '') {
      setTareas([...tareas, nombre]);
      setNombre('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Contador: {contador}</p>
        <button onClick={aumentarContador}>Aumentar Contador</button>
        <div>
          <input
            type="text"
            placeholder="Ingrese una tarea"
            value={nombre}
            onChange={manejarCambioNombre}
          />
          <button onClick={agregarTarea}>Agregar Tarea</button>
        </div>
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>{tarea}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

