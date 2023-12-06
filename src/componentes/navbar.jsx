import Contador from "./Contador";
import { BrowserRouter, Link } from "react-router-dom";
import Productos from "./Productos";

const Navbar = () => {
    let CartWidget = 0;
  return (
    <div>
      <BrowserRouter>
      <a className="navbar-brand" href="#"><h1>LaPizza</h1></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         
        <div className="container mt-1">
          <div className="btn-group">
            <Link to="/" className="btn btn-dark">
            Inicio
            </Link>
            <Link to="/productos" className="btn btn-dark">
              Productos
            </Link>
            <Link to="/promos" className="btn btn-dark">
              Promos
            </Link>
            <Link to="/nosotros" className="btn btn-dark">
              Nosotros
            </Link>
            <Link to="/contacto" className="btn btn-dark">
              Contacto
            </Link>
            <Contador />
          </div>
          
        </div> 
        

      </BrowserRouter>
        
    </div>
  )
}
export default Navbar
