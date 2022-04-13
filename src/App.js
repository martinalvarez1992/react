import logo from './logo.svg';
import './App.css';
import NavBartincho from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
  <> 
    <BrowserRouter>
      <NavBartincho/>
      <Routes>
        <Route path='/' element= {<ItemListContainer/>} />
        <Route path='/item/:productId' element= {<ItemDetailContainer/>} />
        <Route path='/category/:categoryId' element= {<ItemListContainer/>} />
        <Route path='*' element= {<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>    
   
  </>
     
  ); 
}

export default App;
