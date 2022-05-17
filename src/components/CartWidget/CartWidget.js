import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from 'react-router-dom';


const CartWidget = () => {
const { getQuantity } = useContext(CartContext)
  
  return(
    <>
      <Link to='/cart' className="CartWidget" class="btn btn btn-outline-primary">
          <FontAwesomeIcon icon={faCartShopping} /> {getQuantity()}  
      </Link>
    </>
  )
 }
 
export default CartWidget