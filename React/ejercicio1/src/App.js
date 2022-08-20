import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [error, setError] = useState(null)

  const handleIncrement = () => {
    setCount(count + 1)
    setError(null)
  }

  const handleDecrement = () => {
    if(count >= 1) {
      setCount(count -1)
    } else {
      setError('No podés reducir más allá del 0')
    }
    
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1> EJERCICIO 1: Contador con useState</h1>
        <span className='conteo'> El conteo es: {count}</span>
        <button className='button' onClick={handleIncrement}> Incrementar </button>
        <button className='button' onClick={handleDecrement}> Reducir </button>
        <span className='errorMsg'> {error && error} </span>

      </header>
    </div>
  );
}

export default App;
