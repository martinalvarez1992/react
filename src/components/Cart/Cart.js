import { useContext, useState } from "react"
import CartContext from "../../context/CartContext";
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { addDoc, collection, getDoc, getDocs, writeBatch, query, where, documentId} from 'firebase/firestore'
import { firestoreDb } from'../../services/firebase/index'


const Cart = () => {
    const [loading, setLoading] = useState(false)
    const { cart, removeItem, getTotal, getQuantity } = useContext(CartContext)


  const createOrder = () => {
      setLoading(true)
            
            const objOrder = {
                items: cart,
                buyer: {
                    name: 'Martin Alvarez',
                    phone: '098455455',
                    email: 'malvarez@gmail.com'
                },
                total: getTotal(),
                date: new Date()
            }
            
            const ids = cart.map(prod => prod.id)

            const batch = writeBatch(firestoreDb)
            
            const collectionRef = collection(firestoreDb, 'products')

            const outOfStock = []

            getDocs(query(collectionRef, where(documentId(), 'in', ids)))
                .then(response => {
                    response.docs.forEach(doc => {
                        const dataDoc = doc.data()
                        const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity
    
                        if(dataDoc.stock >= prodQuantity) {
                            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                        } else {
                            outOfStock.push({ id: doc.id, ...dataDoc })
                        }
                    })
                }).then(() => {
                    if(outOfStock.length === 0) {
                        const collectionRef = collection(firestoreDb, 'orders')
                        return addDoc(collectionRef, objOrder)
                    } else {
                        return Promise.reject({ name: 'outOfStockError', products: outOfStock})
                    }
                }).then(({ id }) => {
                    batch.commit()
                    console.log(`El id de la orden es ${id}`)
                }).catch(error => {
                    console.log(error)
                }).finally(() => {
                    setLoading(false)
                })
        }

        if(loading) {
            return <h1>Se esta generando orden</h1>
        }

  
    


   

 
 
    return (
        <>
        { cart.length > 0 
        ? (
        <div>
         <h1>CARRITO</h1>
        <ul>
            {
                cart.map (prod => <li key={prod.id}>{prod.name} <br></br> Cantidad: {prod.quantity} <br></br> Precio uni: ${prod.price} 
                <br></br> 
                <h3>Total: ${getTotal()}</h3>
                <button onClick={() => removeItem(prod.id)}> X </button> <br></br>
               
                </li>
                
                )
            }
            <button onClick={() => createOrder()}> Finalizar Compra</button>

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
 
