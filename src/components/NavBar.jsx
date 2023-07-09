import { useState } from "react";
import { Link } from "react-router-dom";
import CardWidget from "./CardWidget";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="Navbar">
        <div>
          <Link to={"/"}>
            <h1>Santiago Automotores</h1>
          </Link>
        </div>

        <div className="NavbarLista">
          <ul>
            <li>
              <button onClick={handleMenuToggle}>
                Vehiculos por Categoria
              </button>
              {menuOpen && (
                <ul>
                  <li>
                    <Link to={`/categoria/`}>Todos</Link>
                  </li>
                  <li>
                    <Link to={`/categoria/${"autos"}`}>Autos</Link>
                  </li>
                  <li>
                    <Link to={`/categoria/${"camionetas"}`}>Camionetas</Link>
                  </li>
                  <li>
                    <Link to={`/categoria/${"motos"}`}>Motos</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div>
          <CardWidget />
        </div>
      </div>
    </>
  );
};

export default NavBar;
