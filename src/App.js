import { useContext } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import Notification from './components/Notification/Notification'
import Login from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import { getCategories } from './products'
import { NotificationContextProvider } from './context/NotificationContext'
import { CartContextProvider } from './context/CartContext'
import Footer from './Footer/Footer'
import Nenes from './components/view/Nenes'
import Nenas from './components/view/Nenas'
import UserContext from './context/UserContext'

const App = () => {
  
 

  const { user } = useContext(UserContext)

  return (
    <div className="App">
      <NotificationContextProvider>
        <CartContextProvider>
        <BrowserRouter>
          <NavBar categories={getCategories()} />
          <Notification />
          <Switch>
            <Route exact path='/'>
              <ItemListContainer />
            </Route>
            <Route path="/nenes">
              <Nenes />
            </Route>
            <Route path="/nenas">
              <Nenas />
            </Route>
            <Route path='/item/:itemid'>
              <ItemDetailContainer />
            </Route>
            <PrivateRoute path='/cart' user={user}>
              <Cart />
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
        </CartContextProvider>
      </NotificationContextProvider>
    </div>
  )
}

export default App
