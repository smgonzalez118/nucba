import logo from './logo.svg';
import './App.css';
import useFetch from './hooks/useFetch';
import { useState } from 'react';



function App() {
  const listIndex = [1, 2, 3, 4, 5, 6, 7, 8]
  const [index, setIndex] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const [datoPrueba, setdatoPrueba] = useState(null)
  const url = `https://jsonplaceholder.typicode.com/posts/${listIndex[index]}`
  
  const {data, error, loading} = useFetch(url)
  
  const handleIncrement = () => {
    if (index < listIndex.length) {
      setIndex(index + 1)
      setErrorMsg(null)
    } else {
      setIndex(index)
      setErrorMsg("Llegaste al final")
    }
  }

  const handleDecrement = () => {
    if (index > 1) {
      setIndex(index - 1)
      setErrorMsg(null)
    } else {
      setIndex(index)
      setErrorMsg("Volviste al principio")
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1> APP para mostrar Posts</h1>
        <span> {errorMsg ? errorMsg : ""} </span>
        <span> Página {index} de {listIndex.length} </span>
          <button onClick={handleIncrement}> Pasar de Post </button>
          <button onClick={handleDecrement}> Volver </button>
        <span> {loading? "Cargando..." : ""} </span>
        <div> {
          <>
            <h3> {data.title}</h3>
            <p> {data.body} </p>
          </>
        
              }
        </div>
      </header>
    </div>
  );
}

export default App;
