import logo from './logo.svg';
import './App.css';

//ejemplo
const Titulo = () => {
  return <h1>Hola</h1>
}

function App() {
   
  return (
    <div className="App">
      <header className="App-header">
        <Titulo/>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
