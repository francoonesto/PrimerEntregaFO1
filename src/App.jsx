import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main';


function App() {
  return (
    <div className="container-fluid">
    <Header />
    <Main />
    <ItemListContainer    greeting={"no se encontraron productos disponibles!"} />
    <Footer />
    </div>
  );
}

// greeting={alert("bienvenido a maldivas!")} /> se me ocurrio esto pero no se si cumple con lo pedido
export default App;
