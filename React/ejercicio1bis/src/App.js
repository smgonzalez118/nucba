import logo from './logo.svg';
import './App.css';
import counterReducer from './reducers/counterReducer.js'
import { useReducer } from 'react';

function App() {
  let initialState = {count: 0, error: false}
  const [state, dispatch] = useReducer(counterReducer, initialState)

  const handleIncrement = () => {
    dispatch({type: 'increment'})
  }

  const handleDecrement = () => {
    dispatch({type: 'decrement'})
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1> EJERCICIO 1 Bis: Contador con useReducer</h1>
        <span> El conteo es: {state.count} </span>
        <button className='button' onClick={handleIncrement}> Incrementar </button>
        <button className='button' onClick={handleDecrement}> Reducir </button>
        <span> {state.error && "No podés reducir más allá del 0"} </span>
      </header>
    </div>
  );
}

export default App;
