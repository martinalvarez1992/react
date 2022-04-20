import { Link } from "react-router-dom"
import {Navbar, Nav, Container, Row, Col, NavDropdown, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useEffect, useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
 
 
const ItemDetail = ({id, name, image, category, description, stock, price}) => {

    const { addItem, isInCart } = useContext(CartContext)

    const [quantity, setQuantity] = useState(0)
    
    // const value = useContext (Context)
    // console.log(value)

    
    const handleAdd = (count) => {
        console.log('agregar al carrito', count)
        setQuantity(count)

        const productObj = {
            id, name, price
        }

 
        addItem({...productObj, quantity: count})
    }
 
    return (
        <>
             <Container>
                <Row>
                    <Col><Card className=" ">
                        <Card.Img src={image} alt="Card image" /></Card>             
                    </Col>
                    <Col>
                        <h4 className="card-title">{name}</h4>
                        <h5 className="card-title">${price}</h5>
                        <p className="card-title">{description}</p>
                        <h5 className="card-title">{stock}</h5>
                        {isInCart(id) ? <Link to='/cart'> Ir al carrito </Link> : <ItemCount handleAdd={handleAdd} stock={8} initial={0} /> }

                    </Col>
                </Row>
            </Container>        
             
        </>     
    )
}

export default ItemDetail

