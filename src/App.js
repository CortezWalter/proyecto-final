import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer Mensaje="Bienvenido Aaron" />
      <ItemCount />
    </>
  );
}

export default App;
