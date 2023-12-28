import './App.css';
import Pantalla from './componentes/Pantalla';
import './hoja-estilos/Boton.css';
import {useState} from 'react';
import BotonClear from './componentes/BotonClear';
import { evaluate } from 'mathjs';  


function App(){

  const [input, setInput] = useState('');
  
  const agregarInput = val => {
    setInput(input + val);
  }

  function Boton(props){
  const es0poreador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

    return(
    <div
     className={`boton-contenedor ${es0poreador(props.children) ? 'operador' : ''}`.trimEnd()}
     onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
    );
  }
  
  const calcularResultado = () => {
  setInput(evaluate(input))
  }

  
  return(
<div className='App'>   
  <div className='contenedor-calculadora'>
  <Pantalla input={ input }/>  
    <div className='fila'>
    <Boton manejarClic={agregarInput}>9</Boton>
    <Boton manejarClic={agregarInput}>8</Boton>
    <Boton manejarClic={agregarInput}>7</Boton>
    <Boton manejarClic={agregarInput}>/</Boton>
    </div>
    <div className='fila'>
    <Boton manejarClic={agregarInput}>6</Boton>
    <Boton manejarClic={agregarInput}>5</Boton>
    <Boton manejarClic={agregarInput}>4</Boton>
    <Boton manejarClic={agregarInput}>*</Boton>
    </div>
    <div className='fila'>
    <Boton manejarClic={agregarInput}>3</Boton>
    <Boton manejarClic={agregarInput}>2</Boton>
    <Boton manejarClic={agregarInput}>1</Boton>
    <Boton manejarClic={agregarInput}>+</Boton>
    </div>
    <div className='fila'>
    <Boton manejarClic={agregarInput}>.</Boton>
    <Boton manejarClic={agregarInput}>0</Boton>
    <div className='BotonClear'>
    <BotonClear  manejarClear={() => setInput('')}>c</BotonClear>
    </div>
    <Boton manejarClic={calcularResultado}>=</Boton>
    </div>
    

  </div>
</div>   
  );
}

export default App;