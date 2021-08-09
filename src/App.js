import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import itemCount from './components/itemCount';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer Mensaje="Bienvenido Aaron" />
      <itemCount />
    </>
  );
}

export default App;
