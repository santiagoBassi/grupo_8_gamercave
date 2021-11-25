import './App.css';
import NavBar from './components/NavBar/NavBar';
import InfoDataBase from './components/InfoDataBase/InfoDataBase';
import Container from './components/Container/Container';
import ItemCategory from './components/ItemCategory/ItemCategory';

function App() {
  return (
    <div>
      <NavBar/>
      <InfoDataBase/>
      <Container title="Ultimo Producto"><div>holaaad</div></Container>
      <Container title="categorias">
        <ItemCategory category="Procesador"/>
        <ItemCategory category="Disco Rigido"/>
        <ItemCategory category="Auricular"/>
        <ItemCategory category="Mouse"/>
        <ItemCategory category="Teclado"/>
        <ItemCategory category="Memoria Ram"/>
        <ItemCategory category="Monitor"/>
        <ItemCategory category="Cooler"/>
        <ItemCategory category="Fuente"/>
        <ItemCategory category="Mother"/>
        <ItemCategory category="Placa de Video"/>
      </Container>
    </div>
  );
}

export default App;
