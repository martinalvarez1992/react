import { useContext } from "react"
import CartContext from "../../context/CartContext";

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)
   
    if(cart.lenght === 0) {
        return(
            <>
                        <h1>No hay productos</h1>
            </>
        )
    }

    return (
        <>
        <h1>CARRITO</h1>
        <ul>
            {
                cart.map (prod => <li key={prod.id}>{prod.name} <br></br> Cantidad: {prod.quantity} <br></br> Precio uni: ${prod.price} <br></br> Subtotal: ${prod.quantity * prod.price} <button onClick={() => removeItem(prod.id)}> X </button> </li>)
            }

        </ul>
        </>
    )
}

export default Cart;