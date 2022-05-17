import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown, ButtonGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"


const ItemCount = ({stock = 0, initial = 1, handleAdd})=> {
const [count, setCount] = useState(initial)

useEffect (()=> {
  setCount(initial)
}, [initial]);

const increment = () => {
  if(count < stock) {
      setCount(count+1)
  }
}
const decrement = () => {
  if(count > 1) {
      setCount(count - 1)
  }     
}

if(stock === 0) {
  return <button className='Option' disabled>No hay stock</button>
}

    return (
    <>
      <div className="mt-1"> 
        <ButtonGroup aria-label="Contador">
            <Button variant="secondary" onClick={decrement}>-</Button>
            <Button variant="secondary">{count}</Button>
            <Button variant="secondary"  onClick={increment}>+</Button>
        </ButtonGroup>
        <Button className="ms-1" onClick={() => {handleAdd(count)}}>Agregar al carrito</Button>
      </div> 
    </>
  
    )

}

export default ItemCount;
