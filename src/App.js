import logo from './logo.svg';
import './App.css';
import NavBartincho from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter'

function App() {
  return (
  <>    
    <NavBartincho/>
    <ItemListContainer greeting={'Desafío: Crea tu landing'}>
      <button>Boton 1</button>
      <button>Boton 2</button>
    </ItemListContainer>

  


  </>
 
     
  );
}

export default App;
