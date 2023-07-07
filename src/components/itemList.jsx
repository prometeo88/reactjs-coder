/* eslint-disable react/prop-types */
import { Box, Container } from "@chakra-ui/react";
import Item from "./item";


const ItemList = ({ prod }) => {
  return (
    <Container className="cardCatalogo">
      <Box className="cardIndividual">
      {prod.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          producto={item.producto}
          descripcion={item.descripcion}
          stock={item.stock}
          precio={item.precio}
        />
      ))}</Box>
    </Container>
  );
};

export default ItemList;

