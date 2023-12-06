import Contador from "./Contador";
import { BrowserRouter, Link } from "react-router-dom";

const Navbar = ({ setSelectedCategory }) => {
  return (
    <div className="container mt-1">
      <div className="btn-group">
        <BrowserRouter>
        <Link to="/productos" className="btn btn-dark" onClick={() => setSelectedCategory('')}>
          Todos
        </Link>
        <Link to="/productos/categoria/pizzaNormal" className="btn btn-dark" onClick={() => setSelectedCategory('pizzaNormal')}>
          Pizzas Normales
        </Link>
        <Link to="/productos/pizzaConPasto" className="btn btn-dark" onClick={() => setSelectedCategory('pizzaConPasto')}>
          Con vegetales
        </Link>
        <Link to="/productos/pizzaEspecial" className="btn btn-dark" onClick={() => setSelectedCategory('pizzaEspecial')}>
          Especiales
        </Link>
        <Contador />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Navbar;