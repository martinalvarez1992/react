import React,{ useState } from 'react';
import { useEffect } from 'react'
import { getProducts }  from '../../mock/products'
import ItemList from '../ItemList/ItemList'

import {Navbar, Nav, Container, NavDropdown, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState ([])

    useEffect  (()  => {
        getProducts().then (prods => {
            setProducts(prods)
        }).catch (error => {
            console.log(error)
        })
    }, [])
 
    return(
        <>
        <ItemList products={products}/>
        </>

    )
}

export default ItemListContainer