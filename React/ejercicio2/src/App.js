import logo from './logo.svg';
import './App.css';
import ComponenteUno from './components/componenteUno';

function App() {
  let currYear = new Date().getFullYear()
  return (
    <div className="App">
      <header className="App-header">
       <ComponenteUno currentYear= {currYear} />
      </header>
    </div>
  );
}

export default App;
