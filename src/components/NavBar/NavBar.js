import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    console.log('hola')
  return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand color-red" href="#">
          CARIÑOSOS
        </a>
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
              <a className="nav-link bg--red" aria-current="page" href="#">
                BB NIÑAS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link bg--red" href="#">
                BB NIÑOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link bg--red" href="#">
                NIÑAS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link bg--red" href="#">
                NIÑOS
              </a>
            </li>
            <CartWidget/>
          </ul>
        </div>
      </div>
    </nav>
  </>;
};

export default NavBar;
