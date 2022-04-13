import React,{ useState } from 'react';
import { useEffect } from 'react'
import { getProductById }  from '../../mock/products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {
    const [product, setProduct] = useState ([])
    const {productId} = useParams()

    useEffect  (()  => {
        getProductById(productId).then (prod => {
            console.log(prod)
            setProduct(prod)
        })
    })
 
    return(
        <>
        {
        product 
        ? <ItemDetail {...product}/> 
        : <h1>Producto no existe</h1>
        }   
        </>

    )
}

export default ItemDetailContainer