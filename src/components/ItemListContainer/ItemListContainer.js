import React,{ useState } from 'react';
import { useEffect } from 'react'
// import { getProducts }  from '../../mock/products'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
// import ItemCount from '../ItemCount/ItemCount';
import { getDocs, collection, query, where, limit, orderBy } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'

// import {Navbar, Nav, Container, NavDropdown, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState ([])
    const {categoryId} = useParams()

    useEffect  (()  => {
            // getProducts(categoryId).then (prods => {
            //     setProducts(prods)
            // }).catch (error => {
            //     console.log(error)
            // })

        const collectionRef = categoryId 
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
        : query(collection(firestoreDb, 'products'), orderBy("name", "desc"))
 
        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })

    }, [categoryId])

    if(products.length === 0) {
        return <h1>No hay productos</h1>
    }

    
    
    // const [count, setCount] = useState(1); 
    // const onAdd = (condition) => {
    //     if(condition === '-'){
    //         setCount(count - 1);  
    //     } 
    //     if (condition === '+'){
    //         setCount(count + 1);  
    //     }
    // }; 

    // const stock = 10;
    // const initial = 1;
    

    return(
        <>
            <ItemList products={products}/>
        </>

    )
}

export default ItemListContainer