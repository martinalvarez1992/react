import './NavBar.css'
//import { NavBar, NavDropdown, } from 'react-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CartWidget from '../CartWidget/CartWidget';
import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom';
import { firestoreDb } from '../../services/firebase';
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
// import { getCategories }  from '../../mock/products'


const NavBartincho = () => {
    
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
                <Navbar.Brand href="/">Tienda Online</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/">Lista</Nav.Link>
  
 
           { categories.map(cat => 
          <Nav.Link key={cat.id} href={`/category/${cat.id}`}>{cat.description}</Nav.Link>)}
  
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