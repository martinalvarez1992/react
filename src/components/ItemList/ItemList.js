import {Navbar, Nav, Container, NavDropdown, Card, Button, CardGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <CardGroup>
            {products.map(prod => <Item key={prod.id} {...prod} /> )}
        </CardGroup>

    )
}

export default ItemList