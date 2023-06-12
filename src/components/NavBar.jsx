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
            <li>
              <Link to={"/categoria"}>
                Vehiculos por Categoria
              </Link>
              <ul>
                <li>
                  <Link to={`/categoria/${"autos"}`}>Autos</Link>
                </li>
                <li>
                  <Link to={`/categoria/${"camionetas"}`}>Camionetas</Link>
                </li>
              </ul>
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
