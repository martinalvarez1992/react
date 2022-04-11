import { Link } from "react-router-dom"
import {Navbar, Nav, Container, Row, Col, NavDropdown, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const ItemDetail = (props) => {
    console.log (props)
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
                    
                    </Col>
                </Row>
            </Container>        
             
        </>     
    )
}

export default ItemDetail

