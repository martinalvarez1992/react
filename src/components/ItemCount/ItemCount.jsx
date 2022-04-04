import React, {useState} from "react";
import {Navbar, Nav, Container, NavDropdown, ButtonGroup, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemCount = ({onAdd, stock, initial, count}) => { 
    return (
    <>
  
    <ButtonGroup aria-label="Contador">
        <Button variant="secondary" onClick={() => {if(count > initial) {onAdd('-')}}}>-</Button>
        <Button variant="secondary">{count}</Button>
        <Button variant="secondary"  onClick={() => {if(count < stock) {onAdd('+')}}}>+</Button>
    </ButtonGroup>

    </>
  
    )

}

export default ItemCount;
