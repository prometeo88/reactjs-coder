import CardWidget from "./CardWidget";
import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>Inicio</li>
        <li>Vehiculos por Categoria</li>
        <li>Autos</li>
      </ul>
      <div>
        <>
          <CardWidget />
          <ItemListContainer />
        </>
      </div>
    </div>
  );
};

export default NavBar;
