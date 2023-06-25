import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemDetailConteiner from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Error404 from './components/Error404';
import Carrito from './components/Carrito';
import CartContextProvider from './components/context/CartContext';
import Checkout from './components/Checkout';
import CompraTerminada from './components/CompraTerminada';



function App() {
  return (
    <div className="container-fluid">
    <CartContextProvider>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path={'/'} element={<Main />} />
      <Route path={'/categoria/:id'} element={<ItemListContainer />} />
      <Route path={'/item/:id'} element={<ItemDetailConteiner />} />
      <Route path={'/carrito'} element={<Carrito />} />
      <Route path={'/checkout'} element={<Checkout />} />
      <Route path={'/compraterminada/:orderId'} element={<CompraTerminada />} />
      <Route path={'/*'} element={<Error404 />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App;
