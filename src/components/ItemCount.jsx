/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { CartContext } from "../context/shoppingCartContext";
import { Badge, ButtonGroup, IconButton, Tooltip } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = ({ stock, id, precio, producto }) => {
  const { cart, setCart } = useContext(CartContext);

  const [count, setCount] = useState(1);

  const addQty = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const substractQty = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    if (count <= stock) {
      setCart((currItems) => {
        const isItemFound = currItems.find((item) => item.id === id);
        if (isItemFound) {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + count };
            } else {
              return item;
            }
          });
        } else {
          return [...currItems, { id, quantity: count, precio, producto }];
        }
      });
    }
  };

  return (
    <>
      <ButtonGroup size="sm">
        {count < 1 ? (
          <Tooltip label="Mínimo de Stock Alcanzado" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={substractQty} />
        )}
        <IconButton onClick={addToCart}>
          <Badge > Agregar al Carrito: {count} </Badge>
        </IconButton>
        {count >= stock && (
          <Tooltip label="No hay más stock disponible" placement="bottom">
            <IconButton  icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
        {count < stock && (
          <IconButton icon={<AddIcon />} onClick={addQty} />
        )}
      </ButtonGroup>
    </>
  );
};

export default ItemCount;
