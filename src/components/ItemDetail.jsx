/* eslint-disable react/prop-types */
import {
  Box,
  Heading,
  Text,
  Image,
  Center,
  Card,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ prod }) => {
  const {  id, producto, descripcionLarga, stock, precio } = prod;

 

  return (
    <>
      <Center>
        <Card maxW="400px" className="catalogo">
          <Box>
            {" "}
            <Center>
              <Heading as="h1" size="xl" className="titulos">
                Detalle del Vehiculo
              </Heading>
            </Center>
          </Box>
          <Box key={prod.id}>
            <Center>
              <Heading as="h3" size="lg">
                {producto}
              </Heading>
            </Center>
            <Center>
              <Image
                className="carimg"
                src="../src/assets/img/auto-generico.jpg"
              />
            </Center>
            <Text>{descripcionLarga}</Text>
            <Text>Stock: {stock}</Text>
            <Text>Precio: USD {precio}</Text>
            <Text>Precio: ARG {(precio * 450).toLocaleString()}</Text>
            <Center>
              <ItemCount
                stock={stock}
                id={prod.id}
                precio={precio}
                producto={producto}
              />
            </Center>
            <Center>
              <Link to={"/categoria"}>
                <Button>Volver</Button>
              </Link>
            </Center>
          </Box>
          <Box>
            <Center>
              <Link to={"/Cart"}>
                <Button>Ver Carrito</Button>
              </Link>
            </Center>
          </Box>
        </Card>
      </Center>
    </>
  );
  
};


export default ItemDetail;
