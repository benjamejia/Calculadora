import { evaluate } from 'mathjs';
import { useState } from 'react';

import './App.css';
import Pantalla from './componentes/Pantalla';
import './hoja-estilos/Boton.css';
import BotonClear from './componentes/BotonClear';
import Boton from './componentes/Boton';

function App() {
  const [input, setInput] = useState('');

  const setScreenValue = val => {
    setInput(input + val);
  }

  const getResult = () => {
    setInput(evaluate(input))
  }

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          {
            [9, 8, 7, '/'].map(
              (numero) => (
                <button
                  key={numero}
                  className={esOperador(numero) ? 'boton-contenedor operador' : 'boton-contenedor'}
                  onClick={() => setScreenValue(numero)}
                >
                  {numero}
                </button>
              )
            )
          }
        </div>
        <div className='fila'>
          {
            [6, 5, 4, '*'].map(
              (numero) => (
                <button
                  key={numero}
                  className={esOperador(numero) ? 'boton-contenedor operador' : 'boton-contenedor'}
                  onClick={() => setScreenValue(numero)}
                >
                  {numero}
                </button>
              )
            )
          }
        </div>
        <div className='fila'>
          {
            [3, 2, 1, '+'].map(
              (numero) => (
                <button
                  key={numero}
                  className={esOperador(numero) ? 'boton-contenedor operador' : 'boton-contenedor'}
                  onClick={() => setScreenValue(numero)}
                >
                  {numero}
                </button>
              )
            )
          }
        </div>
        <div className='fila'>
          <Boton manejarClic={setScreenValue}>.</Boton>
          <Boton manejarClic={setScreenValue}>0</Boton>
          <Boton manejarClic={() => setInput('')}>c</Boton>
          <Boton manejarClic={getResult}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;