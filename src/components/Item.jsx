/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  Center,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, producto, descripcion, stock, precio, categoria }) => {
  return (
    <Center>
      <Card className="catalogo">
        <Box key={id} className="detalles">
          <Heading as="h2" size="lg">
            {producto}
          </Heading>
          <Text>{categoria}</Text>
          <Center>
            <Image
              className="carimg"
              src="../src/assets/img/auto-generico.jpg"
            />
          </Center>
          <Text>{descripcion}</Text>
          <Text>Stock: {stock}</Text>
          <Text>Precio: USD {precio}</Text>
          <Center>
            <Link to={`/item/${id}`}>
              <Button colorScheme="blue">Ver Detalle</Button>
            </Link>
          </Center>
        </Box>
      </Card>
    </Center>
  );
};

export default Item;
