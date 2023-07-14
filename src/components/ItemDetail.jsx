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
  const {  id, producto, descripcionLarga, stock, precio, imagen } = prod;

 

  return (
    <>
      <Center>
        <Card maxW="600px" className="catalogo">
          <Box>
            {" "}
            <Center>
              <Heading as="h1" className="titulos">
                {producto}
              </Heading>
            </Center>
          </Box>
          <Box key={prod.id}>
            
            <Center>
              <Image
                className="carimg"
                src={imagen}
              />
            </Center>
            <Text>{descripcionLarga}</Text>
            <Text>Stock: {stock}</Text>
            <Text>Precio: USD {(precio*1).toLocaleString()}</Text>
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
                <Button colorScheme="green" size="sm">Volver</Button>
              </Link>
            </Center>
          </Box>
          <Box>
            <Center>
              <Link to={"/Cart"}>
                <Button colorScheme="green" size="sm">Ver Carrito</Button>
              </Link>
            </Center>
          </Box>
        </Card>
      </Center>
    </>
  );
  
};


export default ItemDetail;
