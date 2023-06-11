import { Card, CardBody, Center } from "@chakra-ui/react";
import data from "../data.json";
import { Link } from "react-router-dom";

const Item = () => {
  return (
    <div>
      <Center>
        <Card>
        <CardBody>
          {data.map((prod) => {
            const { id, producto, descripcion, stock, precio } = prod;

            return (
              <div key={id} className="detalles">
                <h3>{producto}</h3>
                <img
                  className="carimg"
                  src="src/assets/img/auto-generico.jpg"
                  alt="Imagen del vehículo"
                />
                <h5>{descripcion}</h5>
                <p>Stock: {stock}</p>
                <p>Precio: {precio}</p>

                <Link to= {`/item/${id}`}>
                <button>Detalle</button>
                </Link>
              </div>
            );
          })}
          </CardBody>
        </Card>
      </Center>
    </div>
  );
};

export default Item;
