import './Footer.css';

const Footer = () => {
    return (
        <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Productos</a></li>
            
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Acerca de Nosotros</a></li>
          </ul>
          <p class="text-center text-muted">&copy; 2021 Company, Inc</p>
        </footer>
      </div>
      
    )
}

export default Footer;