import data from "../data.json";

const Catalogo = () => {
  return (
    <>
    <div><h1 className="titulos" >Listado de Productos Disponibles</h1></div>
      {data.map((prod) => {
        return (
          <div key={prod.id}>
            <h3>{prod.producto}</h3>
            <h5>{prod.descripcion}</h5>
            <h5>Stock: {prod.stock}</h5>
          </div>
        );
      })}
    </>
  );
};
export default Catalogo;
