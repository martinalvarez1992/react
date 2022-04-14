import {Navbar, Nav, Container, NavDropdown, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({id, name, image, description, price}) => {
    return(
        <>
     <Card  key={id} style={{maxWidth: '16rem' , margin: '10px', marginTop: '10px', border: '2px solid #e6e6e6' }}>
        <Card.Img variant="top" src={image} alt={name}/>
        <Card.Body>
            <Card.Title style={{overflow: 'hidden' , textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>${price}</Card.Title>
            <Card.Title style={{overflow: 'hidden' , textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</Card.Title>
            <Card.Text style={{overflow: 'hidden' , textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} >
             {description}

            </Card.Text>
            <Button style={{width: '100%'}} variant="primary" href={`/item/${id}`}  >Ver detalle</Button>
        </Card.Body>
        </Card>       
        </>
        
    )
}

export default Item