import './NavBar.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import { useState, useEffect, useContext } from 'react'
import { firestoreDb } from '../../services/firebase';
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/CartContext';



const NavBartincho = () => {
    
    const { getQuantity } = useContext(CartContext)

    const [categories, setCategories] = useState([])

    useEffect(() => {
    
        getDocs(query(collection(firestoreDb, 'categories'))).then(response => {
          const categories = response.docs.map(doc => {
            return { id: doc.id, ...doc.data()}
          })
          setCategories(categories)
        })
      }, [])

      
    
    return(<>
 
        
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Tienda Online</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                         { categories.map(cat => <Nav.Link as={NavLink} key={cat.id} to={`/category/${cat.id}`}>{cat.description}</Nav.Link>)}
                    </Nav>
                    <Nav>
                        <Nav.Link >
                            {
                                getQuantity() > 0 
                                ? <CartWidget/>
                                : <div></div>
                             }
                            
                        </Nav.Link>      
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        </>
        
    )

}
 
export default NavBartincho