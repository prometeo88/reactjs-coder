import { Container } from "@chakra-ui/react";
import Item from "./Item";

const ItemList = ({ prod }) => {
  return (
    <Container>
      {prod.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          prod={item.producto}
          descripcion={item.descripcion}
          stock={item.stock}
        />
      ))}
    </Container>
  );
};

export default ItemList;

