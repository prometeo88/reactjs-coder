import { Link } from "react-router-dom";
import CardWidget from "./CardWidget";

const NavBar = () => {
  return (
    <>
      <div className="Navbar">
        <div> {/* BUSCAR COMO QUITAR EL SUBRAYADO */}
          <Link to={"/"}><h1 style={{textDecoration: 'none'}}>Santiago Automotores</h1></Link>
        </div>

        <div>
          <ul>
            <Link to={"/categoria"}><li>Vehiculos por Categoria</li></Link>
            
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
