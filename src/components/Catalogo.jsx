import data from "../data.json";

const autoimg = ""

const Catalogo = () => {
  return (
    <>
      <div>
        <h1 className="titulos">Listado de Productos Disponibles</h1>
      </div>
      {data.map((prod) => {
        return (
          <div key={prod.id}>
            <h3>{prod.producto}</h3>
            <img className="carimg" src="src/assets/img/auto-generico.jpg"/>
            <h5>{prod.descripcion}</h5>
          </div>
        );
      })}
    </>
  );
};
export default Catalogo;
