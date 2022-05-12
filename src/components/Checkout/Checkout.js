import { useContext, useState } from "react"
import CartContext from "../../context/CartContext";
import {Navbar, Nav, Container, Row, Col, NavDropdown, Card, Button, Form} from 'react-bootstrap';
import { addDoc, collection, getDoc, getDocs, writeBatch, query, where, documentId} from 'firebase/firestore'
import { firestoreDb } from'../../services/firebase/index'

const Checkout = ()  => {
    const [loading, setLoading] = useState(false)
    const { cart, removeItem, getTotal, getQuantity } = useContext(CartContext)
    const [orderStatus, setOrderStatus] = useState(null)

    const submitHandler = (e) => {
        e.preventDefault();

        const objUsuario = {
            nombre: e.target.nombre.value,
            telefono: e.target.telefono.value,
            email: e.target.email.value
        }
        console.log(objUsuario)
        createOrder(objUsuario) 
    }

    const createOrder = (datosUsuario) => {
        setLoading(true)  
              const objOrder = {
                  items: cart,
                  buyer: datosUsuario, 
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
                      setOrderStatus('confirmed')
                       
                  }).catch(error => {
                      console.log(error)
                  }).finally(() => {
                      setLoading(false)
                  })
          }

          if(loading) {
              return <h1>Se esta generando orden</h1>
          }    

          if(orderStatus === 'confirmed') {
            return(
                <>
                <div>
                <h1>Tu compra fue realizada con exito</h1>
                 </div>
                </>
            )
        } 

 
  
    return (<>
        <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control name="nombre" type="text" placeholder="Ingresar nombre" />
 
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tel</Form.Label>
            <Form.Control name="telefono" type="text" placeholder="Ingresar Telefono" />
 
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Ingresar email" />
 
        </Form.Group>

        <Button variant="primary" type="submit">
            Comprar
        </Button>
        </Form>
    
    
    </>)
}



export default Checkout