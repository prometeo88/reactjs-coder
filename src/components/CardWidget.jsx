import { Link } from "react-router-dom";
import { CartContext } from "../context/shoppingCartContext";
import { useContext } from "react";

const CardWidget = () => {
  const{cart, setCart} = useContext (CartContext);
  const quantity = cart.reduce ((acc,curr) =>{
    return acc + curr.quantity;
  },0);
 
  return (
    <>
      <Link to={"/Cart"}><div>
        {<span className="textoFlotante">{quantity}</span>}
      </div>
      </Link>
    </>
  );
};

export default CardWidget;
