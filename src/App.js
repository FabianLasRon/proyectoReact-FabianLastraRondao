import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemList from './Components/ItemList/ItemList';



function App() {
  
  return (
  <>
   <NavBar/> 
   <ItemListContainer
    catalogo="catalogo..."
    />
    <ItemList />
   </>
  );
}

export default App;
