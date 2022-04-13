import React,{ useState } from 'react';
import { useEffect } from 'react'
import { getProducts }  from '../../mock/products'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

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
 
    return(
        <>
        <ItemList products={products}/>
        </>

    )
}

export default ItemListContainer