import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, ButtonGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"


const ItemCount = ({stock = 0, initial = 1, handleAdd})=> {
const [count, setQuantity] = useState(initial)

const increment = () => {
  if(count < stock) {
      setQuantity(count+1)
  }
}
const decrement = () => {
  if(count > 0) {
      setQuantity(count - 1)
  }     
}

if(stock === 0) {
  return <button className='Option' disabled>No hay stock</button>
}

 
    
    // const stock = 10;
    // const initial = 1;
    return (
    <>
  
    <ButtonGroup aria-label="Contador">
        <Button variant="secondary" onClick={decrement}>-</Button>
        <Button variant="secondary">{count}</Button>
        <Button variant="secondary"  onClick={increment}>+</Button>
    </ButtonGroup>
        <Button onClick={() => {handleAdd(count)}}>Agregar al carrito</Button>   
 


    </>
  
    )

}

export default ItemCount;
