import React,{ useState } from 'react';
import { useEffect } from 'react'
import { getProductById }  from '../../mock/products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState ([])

    useEffect  (()  => {
        getProductById('2').then (prod => {
            console.log(prod)
            setProduct(prod)
        })
    })
 
    return(
        <>
        <ItemDetail {...product}/>
        </>

    )
}

export default ItemDetailContainer