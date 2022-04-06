import React,{ useState } from 'react';
import { useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { getProducts }  from '../../mock/products'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState ([])

    useEffect  (()  => {
        getProducts().then (prods => {
            setProducts(prods)

        })
    }, [])
/*
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
*/
    return(
        <>
        <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count}/> 
        <ul>
            {products.map(products => <li>{products.name}</li>)}
        </ul>

        </>

    )
}

export default ItemListContainer