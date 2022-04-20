import React, {useState} from "react";
import {Navbar, Nav, Container, NavDropdown, ButtonGroup, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"


const ItemCount = ({ stock, initial, handleAdd}) => { 
    const [count, setCount] = useState (0)
    const onAdd = (condition) => {
        if(condition === '-'){
            // setCount(count - 1);  
            console.log('resta 1')
        } 
        if (condition === '+'){
            // setCount(count + 1);  
            console.log('suma 1')
        }
    }; 

    const changeCounter = (condition) => {
        if (condition === "-") {
          setCount(count - 1);
        } else if (condition === "+") {
          setCount(count + 1);
        } else {
          console.log(`Something went wrong ${condition} is not recognised.`);
        }
      };
    
    // const stock = 10;
    // const initial = 1;
    return (
    <>
  
    <ButtonGroup aria-label="Contador">
        <Button variant="secondary" onClick={() => {if(count > initial) {changeCounter('-')}}}>-</Button>
        <Button variant="secondary">{count}</Button>
        <Button variant="secondary"  onClick={() => {if(count < stock) {changeCounter('+')}}}>+</Button>
    </ButtonGroup>
        <Button onClick={() => {handleAdd(count)}}>Agregar al carrito</Button>   
 


    </>
  
    )

}

export default ItemCount;
