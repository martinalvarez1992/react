import { useContext } from "react"
import CartContext from "../../context/CartContext";
import { Button, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Cart = () => {
    const { cart, removeItem, getTotal, clearCart } = useContext(CartContext)

    return (
        <>
        { cart.length > 0 
        ? (
            <div className="mt-3 mb-5 me-5 ms-5" style={{textAlign: "center"}}>
            <h1>CARRITO DE COMPRAS</h1>
                <div className="mt-3 ">
                    <Table str iped   condensed hover>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Precio unitario</th>
                                <th>Subtotal</th>
                                <th></th>     
                            </tr>
                        </thead>
                        <tbody>
                        {
                            cart.map ( prod => 
                                <tr key={prod.id}>
                                    <td><img alt="" style={{ width: '5rem' }} src={prod.image}></img></td>
                                    <td>{prod.name}</td>
                                    <td>{prod.quantity}</td>
                                    <td>${prod.price}</td>
                                    <td>${prod.price * prod.quantity}</td>
                                    <td> 
                                        <button className="btn btn-danger" onClick={() => removeItem(prod.id)}> Borrar </button> 
                                    </td>
                                </tr>    
                            )
                        }
                        </tbody>
                        <tbody>
                            <tr>
                                <td><h4>Total a pagar:</h4></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><h4>${getTotal()}</h4></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>           
                </div>
                <Button className="mb-4 mt-4" style={{width: '100%'}} variant="danger" onClick={() => clearCart()}>Vaciar Carrito</Button>            
                <Button as={NavLink} style={{width: '100%'}} variant="primary" to={'/checkout'}>Finalizar Compra</Button>
            </div>
        )
        :
        (        
            <div className="mt-3 me-5 ms-5" style={{textAlign: "center"}}>
                <h1>CARRITO VACIO</h1>
                <Button as={NavLink} style={{width: '100%'}} variant="primary" to={`/`}>Volver al inicio</Button>
            </div>
        )
        }
        </>    
    )
}

export default Cart;
 
