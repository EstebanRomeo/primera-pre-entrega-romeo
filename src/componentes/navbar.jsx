const Navbar = () => {
    let CartWidget = 0;
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top  mt-5 mb-4">
            <div className="container-fluid">
                    <a className="navbar-brand" href="#"><h1>LaPizza</h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ms-custom">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item ">
                    <a className="nav-link" href="#">Promos</a>
                    </li>
                    <li className="nav-item ">
                    <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item ">
                    <a className="nav-link" href="#">Nosotros</a>
                    </li>
                    <li className="nav-item ">
                    <a className="nav-link" href="#">Contacto</a>
                    </li>
                    </ul>
                    
                    <a class="fancy" href="#">
                      <span class="top-key"></span>
                      <span class="text">Carrito 🛒 {CartWidget}</span>
                      <span class="bottom-key-1"></span>
                      <span class="bottom-key-2"></span>
                    </a>
                </div>
            </div>
        </nav>
    </div>
  )
}
export default Navbar
