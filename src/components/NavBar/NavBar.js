import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
    
  return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand color-red">
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
           
            
            <CartWidget/>
          </ul>
        </div>
      </div>
    </nav>
  </>;
};

export default NavBar;
