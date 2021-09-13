 

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import CartWidget from  './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
 

//ejemplo


const App = () => {
  
  return (
    <div className="App">
      <header>
        <NavBar>
          <CartWidget/>
        </NavBar>
       
      </header>
      <ItemListContainer titulo="Nuestros productos"/>
      
       
      <Footer/>
    </div>
  );
}

export default App;
