import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer Mensaje="Bienvenido Aaron" />
    </>
  );
}

export default App;
