import data from "../data.json"

 
const ItemDetail = () => {

    return (
        <>
        <div><h1 className="titulos" >Detalle del Vehiculo</h1></div>
          {data.map((prod) => {
            return (
              <div key={prod.id}>
                <h3>{prod.producto}</h3>
                <img className="carimg" src="src/assets/img/auto-generico.jpg"/>
                <h5>Descrición: {prod.descripcionLarga}</h5>
                <h5>Stock: {prod.stock}</h5>
              </div>
            );
          })}
        </>
      );
    };




    export default ItemDetail
  