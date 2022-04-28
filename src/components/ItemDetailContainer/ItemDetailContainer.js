import React,{ useState } from 'react';
import { useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'



const ItemDetailContainer = () => {
    const [product, setProduct] = useState ([])
    const {productId} = useParams()

    useEffect  (()  => {

        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            console.log(response)
            const product = { id: response.id, ...response.data()}
            setProduct(product)
        })

        return (() => {
            setProduct()
        })

    }, [productId])
 
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