import './Footer.css';

const Footer = () => {
    return (
        <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item nav-link px-2 text-muted">Home</li>
            <li className="nav-item nav-link px-2 text-muted">Productos</li>
            
            <li className="nav-item nav-link px-2 text-muted">Acerca de Nosotros</li>
          </ul>
          <p className="text-center text-muted">&copy; 2021 Company, Inc</p>
        </footer>
      </div>
      
    )
}

export default Footer;