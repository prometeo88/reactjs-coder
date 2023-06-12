import { Container } from "@chakra-ui/react";
import Item from "./item";
import data from "../data.json";

const ItemList = ({prod}) => {
  return (
    <Container>
      {data.map((prod) => (
       
        <Item
          key={prod.id}
          id={prod.id}
          prod={prod.producto}
          descripcion={prod.descripcion}
          stock={prod.stock}
        />
      ))}
    </Container>
  );
};

export default ItemList;
