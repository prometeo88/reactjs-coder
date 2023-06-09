import CardWidget from "./CardWidget";

const NavBar = () => {
  return (
    <>
      <div className="Navbar">
        <div>
          <h1>Santiago Automotores</h1>
        </div>

        <div>
          <ul>
            <li>Vehiculos por Categoria</li>
            <li>Autos</li>
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
