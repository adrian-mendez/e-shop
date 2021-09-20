import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    
  return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand color-red">
          CARIÑOSOS
        </span>
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
              <span className="nav-link bg--red">
                BB NIÑAS
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link bg--red">
                BB NIÑOS
              </span>
            </li>
           
            
            <CartWidget/>
          </ul>
        </div>
      </div>
    </nav>
  </>;
};

export default NavBar;
