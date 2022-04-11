import logo from './logo.svg';
import './App.css';
import NavBartincho from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
 
function App() {

  return (
  <>    
    <NavBartincho/>
    <ItemListContainer/>
    <ItemDetailContainer/>
     
  </>
     
  ); 
}

export default App;
