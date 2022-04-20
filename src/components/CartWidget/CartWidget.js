 // get our fontawesome imports
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import CartContext from "../../context/CartContext";


 const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)
  
  return(
    <>

    <div>
       {getQuantity()} <FontAwesomeIcon icon={faCartShopping} />
    </div>
    </>
  )
 }
 
export default CartWidget