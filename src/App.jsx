import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemDetailConteiner from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Error404 from './components/Error404';


function App() {
  return (
    <div className="container-fluid">
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path={'/'} element={<Main />} />
      <Route path={'/categoria/:id'} element={<ItemListContainer />} />
      <Route path={'/item/:id'} element={<ItemDetailConteiner />} />
      <Route path={'/*'} element={<Error404 />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

// greeting={alert("bienvenido a maldivas!")} /> se me ocurrio esto pero no se si cumple con lo pedido
export default App;
