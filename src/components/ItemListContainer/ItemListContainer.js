import React,{ useState } from 'react';
import { useEffect } from 'react'
import { getProducts }  from '../../mock/products'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

import {Navbar, Nav, Container, NavDropdown, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState ([])
    const {categoryId} = useParams()

    useEffect  (()  => {
        getProducts(categoryId).then (prods => {
            setProducts(prods)
        }).catch (error => {
            console.log(error)
        })
    }, [])
    
    const [count, setCount] = useState(1); 
    const onAdd = (condition) => {
        if(condition === '-'){
            setCount(count - 1);  
        } 
        if (condition === '+'){
            setCount(count + 1);  
        }
    }; 

    const stock = 10;
    const initial = 1;
    

    return(
        <>
 
        <ItemList products={products}/>
        </>

    )
}

export default ItemListContainer