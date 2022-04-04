import React,{useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {
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
        <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count}/> 
        </>

    )
}

export default ItemListContainer