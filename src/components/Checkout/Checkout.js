import { useContext, useState } from "react"
import { Button, Form} from 'react-bootstrap';
import { addDoc, collection, getDocs, writeBatch, query, where, documentId} from 'firebase/firestore'
import { firestoreDb } from'../../services/firebase/index'
import { NavLink } from 'react-router-dom';
import CartContext from "../../context/CartContext";



const Checkout = ()  => {
    const [loading, setLoading] = useState(false)
    const { cart, getTotal, clearCart } = useContext(CartContext)
    const [orderStatus, setOrderStatus] = useState(null)
    const [orderId, setOrderId] = useState(null)

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
                      setOrderId(`${id}`)
                      setOrderStatus('confirmed')
                      clearCart()
                       
                  }).catch(error => {
                      console.log(error)
                  }).finally(() => {
                      setLoading(false)
                  })
          }

          if(loading) {
              return (<h1>Se esta generando una orden ...</h1>)
          }    

          if(orderStatus === 'confirmed') {
            return(
                <>
                    <div className="mt-3 ms-5 me-5 text-center">
                        <h1>Tu compra fue realizada con exito</h1>
                        <h3>El codigo de compra de tu orden es: {orderId} </h3>
                        <h6>Asegurate de mantener este codigo guardado para cualquier consulta sobre tu orden.</h6>
                        <Button as={NavLink} style={{width: '100%'}} className="btn btn-primary mt-5" to={`/`} > Volver al inicio </Button>

                    </div>
                </>
            )
        } 

    return (
        <>
            <div className="ms-5 me-5 mt-3">
                <Form onSubmit={submitHandler} >
                <h2>Completa tus datos para finalizar tu compra</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control name="nombre" type="text" placeholder="Ingresar nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control name="telefono" type="text" placeholder="Ingresar Telefono" />
        
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Ingresar email" />
                </Form.Group>
                <Button style={{width: '100%'}} variant="primary" type="submit">
                    Comprar
                </Button>
                </Form>
            </div>
        </>)
}

export default Checkout