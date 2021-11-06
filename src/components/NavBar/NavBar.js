import {  useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import UserContext from '../../context/UserContext'
import CartContext from '../../context/CartContext'
import NotificationContext from '../../context/NotificationContext'

const NavBar = ({ categories }) => {
  //const [productQuantity, setProductQuantity] = useState(0)
  const { user, logout } = useContext(UserContext)
  const { getQuantity } = useContext(CartContext)
  const { setNotification } = useContext(NotificationContext)

  const handleLogout = () => {
    logout()
    setNotification('error', `Hasta luego ${user}`)
  }

  // useEffect(() => {
  //   if (cartProducts.length === 0) {
  //     setProductQuantity(0)
  //   } else {
  //     cartProducts.forEach(prod => {
  //       setProductQuantity(productQuantity + prod.quantity)
  //     })
  //   }
  // }, [cartProducts]) // eslint-disable-line

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand color-red">
          CARIÑOSOS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">


            {/* <li className="Categories">
              {categories.map(category => <NavLink key={category.id} to={`/category/${category.id}`} className='Option' activeClassName="NavLink">{category.description}</NavLink>)}
            </li> */}

            <li className="nav-item">
              <NavLink to="/nenas" className="nav-link bg--red">
                BB NIÑAS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nenes" className="nav-link bg--red">
                BB NIÑOS
              </NavLink>
            </li>

            <li>
              {
                user
                  ? <button className="Button" onClick={handleLogout}>Logout</button>
                  : <Link to='/login'><button className="Button">Login</button></Link>
              }
            </li>
            <li>
              {
                (user && getQuantity() > 0) &&
                <Link to='/cart'>
                  <CartWidget/>
                </Link>
              }
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
export default NavBar;