import logo from './logo.svg';
import './App.css';
import NavBartincho from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart'
import React ,{ useEffect, useState, useContext } from 'react';
import { createContext } from 'react';
import { CartContextProvider }  from './context/CartContext';

// export const Context = createContext()

function App() {
  const [cart, setCart] = useState ([])
  console.log(cart)

  return (
  <> 
    <CartContextProvider>
    <BrowserRouter>
      <NavBartincho/>
      <Routes>
        <Route path='/' element= {<ItemListContainer/>} />
        <Route path='/cart' element= {<Cart/>} />
        <Route path='/item/:productId' element= {<ItemDetailContainer/>} />
        <Route path='/category/:categoryId' element= {<ItemListContainer/>} />
        <Route path='*' element= {<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
   </CartContextProvider>    
   
  </>
     
  ); 
}

export default App;