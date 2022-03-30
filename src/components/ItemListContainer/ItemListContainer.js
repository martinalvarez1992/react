const ItemListContainer = (props) => {

    console.log(props)
    console.log(props.greeting)

    return(
        <>
        <h1>{props.greeting}</h1>
        {props.children}         
        
        </>

    )
}

export default ItemListContainer