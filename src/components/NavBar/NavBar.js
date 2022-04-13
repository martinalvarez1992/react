import './NavBar.css'
//import { NavBar, NavDropdown, } from 'react-bootstrap';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CartWidget from '../CartWidget/CartWidget';


const NavBartincho = () => {
    return(<>
 
        
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Tienda Online</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/">Lista</Nav.Link>
                    <Nav.Link href="/category/plantA">Plantas A</Nav.Link>
                    <Nav.Link href="/category/plantB">Plantas B</Nav.Link>
                    <NavDropdown title="Otros" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#cart"><CartWidget/></Nav.Link>      
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        </>
        
    )

}
 
export default NavBartincho