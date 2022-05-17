import { Link } from "react-router-dom"
import { Container, Row, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useEffect, useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
 
const ItemDetail = ({id, name, image, category, description, stock, price}) => {

    const { addItem, isInCart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(0)
       
    const handleAdd = (count) => {
        console.log('agregar al carrito', count)
        setQuantity(count)

        const productObj = {
            id, name, price, image
        }

        addItem({...productObj, quantity: count})
    }
 
    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <Card>
                            <Card.Img style={{ width: '30rem' }} src={image} alt="Card image" />
                        </Card>             
                    </Col>
                    <Col className="mt-5">
                        <h2>{name}</h2>
                        <h5 className="card-title">${price}</h5>
                        <p className="card-title">{description}</p>
                        <h6 className="card-title mt-4">Stock disponible: {stock}</h6>
                        { isInCart(id) ? <Link class="btn btn-primary" to='/cart'> Ir al carrito <FontAwesomeIcon icon={faCartShopping} /></Link> 
                        : <ItemCount handleAdd={handleAdd} stock={stock} initial={1} /> }
 
                    </Col>
                </Row>
            </Container>        
             
        </>     
    )
}

export default ItemDetail

