/* eslint-disable react/prop-types */
import { Container } from "@chakra-ui/react";
import Item from "./item";


const ItemList = ({ prod }) => {
  return (
    <Container>
      {prod.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          producto={item.producto}
          descripcion={item.descripcion}
          stock={item.stock}
          precio={item.precio}
        />
      ))}
    </Container>
  );
};

export default ItemList;

