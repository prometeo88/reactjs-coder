/* eslint-disable react/prop-types */
import { Card, Box } from "@chakra-ui/react";
import Item from "./Item";


const ItemList = ({ prod }) => {
  return (
    <Box className="cardCatalogo">
      {prod.map((item) => (
        <Card key={item.id} className="cardIndividual">
          <Item
            id={item.id}
            producto={item.producto}
            descripcion={item.descripcion}
            stock={item.stock}
            precio={item.precio}
            imagen={item.imagen}
          />
        </Card>
      ))}
    </Box>
  );
};

export default ItemList;