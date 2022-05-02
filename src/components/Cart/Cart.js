import { useContext } from "react"
import CartContext from "../../context/CartContext";
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)
   
 
    return (
        <>
        { cart.length > 0 
        ? (
        <div>
         <h1>CARRITO</h1>
        <ul>
            {
                cart.map (prod => <li key={prod.id}>{prod.name} <br></br> Cantidad: {prod.quantity} <br></br> Precio uni: ${prod.price} <br></br> Subtotal: ${prod.quantity * prod.price} <button onClick={() => removeItem(prod.id)}> X </button> </li>)
            }

        </ul>
        </div>
        )
        :
        (        
        <div>
        <h1>Carrito Vacio</h1>
        <Button as={NavLink} style={{width: '100%'}} variant="primary" to={`/`}  >Volver al inicio</Button>
        </div>
        )
        }
        </>
        
        
    )
}

export default Cart;