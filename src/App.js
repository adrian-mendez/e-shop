 

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import CartWidget from  './components/CartWidget/CartWidget';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Nenes from './views/Nenes';
import Nenas from './views/Nenas';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

//ejemplo


const App = () => {
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar>
          <CartWidget/>
        </NavBar>
       <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/nenes">
      <Nenes/>
      </Route>
      
      <Route path="/nenas">
      <Nenas/>
      </Route>
      <Route path="/producto/:id">
        <ItemDetailContainer/>
      </Route>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
