import { useContext, useState } from "react";
import { CartContext } from "../context/shoppingCartContext";
import { Button, Card, FormControl, FormLabel, Input, VStack , Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

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

  const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
  };
  const db = getFirestore();

  const [orderID, setOrderID] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(orderColletion, order).then(({ id }) => setOrderID(id));

    if (!name || !email || !telefono) {
      alert("Por favor, complete todos los campos");
      return;
    }

    if (email !== confirmarEmail) {
      alert("Los emails no coinciden");
      return;
    }
  };

  const order = {
    name,
    email,
    confirmarEmail,
    telefono,
    cart,
  };

  const orderColletion = collection(db, "orden");

  return (
    <div className="carrito">
      <h1>Carrito de Compra</h1>
      {cart.length === 0 ? (
        <div>
          <p>No hay elementos en el carrito</p>
          <Link to="/">
            <Button>Ir a la Página Principal</Button>
          </Link>
        </div>
      ) : (
        <div className="carrito-productos">
          <Card className="carrito-card" justify="center" maxW="80%" p="4">
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <Flex>
                  <p>{item.producto}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: USD {item.precio.toLocaleString()}</p>
                  <p>
                    Subtotal: USD{" "}
                    {calculateSubtotal(item.quantity, item.precio)}
                  </p>
                  <Button className="carrito-button" colorScheme="red" w="full" onClick={() => eliminarItem(item.id)}>
                    Eliminar
                  </Button>
                  </Flex>
                </li>
              ))}
            </ul>
          </Card>
          <p className="carrito-total" >Total General: USD {calculateTotal()}</p>
          <Button colorScheme="blue" onClick={vaciarCarrito}>Vaciar Carrito</Button>
        </div>
      )}
      <h2 >Formulario de Compra</h2>
      {cart.length === 0 ? (
        <div>
          <p>Agregar elementos al carrito para finalizar su Compra</p>
        </div>
      ) : (
        <div className="formulario-cart">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} alignItems="flex-start">
              <FormControl>
                <FormLabel>Nombre:</FormLabel>
                <Input
                  type="text"
                  name="Apellido y Nombre"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Teléfono:</FormLabel>
                <Input
                  type="text"
                  name="telefono"
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email:</FormLabel>
                <Input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Confirmar Email:</FormLabel>
                <Input
                  type="email"
                  name="confirmarEmail"
                  onChange={(e) => setConfirmarEmail(e.target.value)}
                />
              </FormControl>
              <Button className="formulario-button" type="submit" colorScheme="green">Confirmar Compra</Button>
            </VStack>
          </form>
          <p>Con su numero de Orden, su compra a finalizado.</p>
          <p>Nro de orden: {orderID}</p>
          <div>
            <Link to={"/"}>
              <Button className="formulario-button" colorScheme="green" onClick={vaciarCarrito}>Finalizar y Volver</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
