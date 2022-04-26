const ItemCart = ({id, name, price, quantity}) => {
    return (
        <li key={prod.id}>{prod.name} <br></br> Cantidad: {prod.quantity} <br></br> Precio uni: ${prod.price} <br></br> Subtotal: ${prod.quantity * prod.price} <button onClick={() => removeItem(prod.id)}> X </button> </li>
    )
}