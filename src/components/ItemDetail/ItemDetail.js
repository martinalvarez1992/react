import { Link } from "react-router-dom"
import {Navbar, Nav, Container, Row, Col, NavDropdown, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from "react-router-dom";

 
const ItemDetail = (props) => {

    const [quantity, setQuantity] = useState(0)
     
    const handleAdd = (count) => {
        console.log('agregar al carrito', count)
        setQuantity(count)
   

    }
 
    return (
        <>
             <Container>
                <Row>
                    <Col><Card className=" ">
                        <Card.Img src={props.image} alt="Card image" /></Card>             
                    </Col>
                    <Col>
                        <h4 className="card-title">{props.name}</h4>
                        <h5 className="card-title">${props.price}</h5>
                        <p className="card-title">{props.description}</p>
                        <h5 className="card-title">{props.stock}</h5>
                        {quantity > 0 ? <Link to='/cart'> Ir al carrito </Link> : <ItemCount handleAdd={handleAdd} stock={8} initial={0} /> }

                    </Col>
                </Row>
            </Container>        
             
        </>     
    )
}

export default ItemDetail

