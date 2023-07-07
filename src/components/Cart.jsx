import { useContext } from "react";
import { CartContext } from "../context/shoppingCartContext";
import { Button, Card, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const calculateSubtotal = (quantity, precio) => {
    return (quantity * precio).toLocaleString();
  };

  const calculateTotal = () => {
    const total = cart.reduce((total, item) => {
      return total + item.quantity * item.precio;
    }, 0);
    return total.toLocaleString();
  };

  const eliminarItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  return (
    <div>
      <h1>Carrito de Compra</h1>
      {cart.length === 0 ? (
        <div>
          <p>No hay elementos en el carrito</p>
          <Link to="/">
            <Button>Ir a la Página Principal</Button>
          </Link>
        </div>
      ) : (
        <div>
          
            <Card maxW="500px" p="4">
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <p>{item.producto}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: USD {item.precio.toLocaleString()}</p>
                    <p>
                      Subtotal: USD {calculateSubtotal(item.quantity, item.precio)}
                    </p>
                    <button onClick={() => eliminarItem(item.id)}>Eliminar</button>
                  </li>
                ))}
              </ul>
            </Card>
          
          <p>Total General: USD {calculateTotal()}</p>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
      )}
      <h2>Formulario de Compra</h2>

      {cart.length === 0 ? (
        <div>
          <p>Agregar elementos al carrito para finalizar su Compra</p>
        </div>
      ) : (
        <form>{/* Agrega los campos del formulario de compra */}</form>
      )}
    </div>
  );
};

export default Cart;
