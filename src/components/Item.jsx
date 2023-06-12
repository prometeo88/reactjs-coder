import { Card, CardBody, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, producto, descripcion, stock, precio, categoria }) => {
  return (
    <div key={id} className="detalles">
      <h2>{producto}</h2>
      <h4>{categoria}</h4>
      <img
        className="carimg"
        src="../src/assets/img/auto-generico.jpg"
        alt="Auto genérico"
      />
      <h5>{descripcion}</h5>
      <p>Stock: {stock}</p>
      <p>Precio: {precio}</p>

      <Link to={`/item/${id}`}>
        <button>Detalle</button>
      </Link>
    </div>
  );
};

export default Item;
