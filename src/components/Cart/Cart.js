import { useContext, useState } from "react"
import CartContext from "../../context/CartContext";
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { addDoc, collection, getDoc, getDocs, writeBatch, query, where, documentId} from 'firebase/firestore'
import { firestoreDb } from'../../services/firebase/index'
import Form from "../Checkout/Checkout"
import { Link } from "react-router-dom"



const Cart = () => {
    const [loading, setLoading] = useState(false)
    const { cart, removeItem, getTotal, getQuantity } = useContext(CartContext)




   

 
 
    return (
        <>
        { cart.length > 0 
        ? (
        <div style={{textAlign: "center"}}>
         <h1>CARRITO DE COMPRAS</h1>
        <ul>
            {
                cart.map (prod => <li key={prod.id}>{prod.name} <br></br> Cantidad: {prod.quantity} <br></br> Precio uni: ${prod.price} 
                <br></br> 
                <h3>Total: ${getTotal()}</h3>
                <button onClick={() => removeItem(prod.id)}> X </button> <br></br>
               
                </li>
                
                )
            }
            {/* Formulario */}
            



            {/* <button onClick={() => createOrder()}> Finalizar Compra</button> */}
            <Button as={NavLink} style={{width: '100%'}} variant="primary" to={'/checkout'}  >Terminar Compra</Button>
        </ul>
        </div>
        )
        :
        (        
        <div style={{textAlign: "center"}}>
        <h1>CARRITO VACIO</h1>
        <Button as={NavLink} style={{width: '100%'}} variant="primary" to={`/`}  >Volver al inicio</Button>
        </div>
        )
        }
        </>
        
        
    )
}

export default Cart;
 
