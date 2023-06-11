 
const ItemDetail = ({ prod }) => {


  const { producto, descripcionLarga, stock } = prod[0];

  return (
    <>
      <div>
        <h1 className="titulos">Detalle del Vehiculo</h1>
      </div>
      <div key={prod[0].id}>
        <h3>{producto}</h3>
        <img className="carimg" src="../src/assets/img/auto-generico.jpg" />
        <h5>Descripción: {descripcionLarga}</h5>
        <h5>Stock: {stock}</h5>
      </div>
    </>
  );
};

export default ItemDetail;
