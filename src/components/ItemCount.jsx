import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock , onAdd}) => {
const [items , setItems] = useState(1);
const [itemStock , setItemStock] = useState(stock);
const [itemAgg , setItemAgg] = useState(false);

const aumentaStock = () =>{
  if (items < itemStock) {
    setItems(items + 1);
  }

}

const disminuyeStock = () =>{
  if (items > 1) {
    setItems(items - 1);
  }
}

const agregarAlCarrito = () =>{
  if(items <= itemStock){
    setItemStock(itemStock - items);
    setItems(1);
    setItemAgg(true);
    onAdd(items);
  }
}

useEffect(() => {
  setItemStock(stock);
},[stock]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-dark" onClick={disminuyeStock}>-</button>
            <button type="button" className="btn btn-outline-dark border-0">{items}</button>
            <button type="button" className="btn btn-outline-dark" onClick={aumentaStock}>+</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col my-3">
        {itemAgg ? <Link to={"/carrito"} className="btn btn-outline-dark border-0">Finalizar Compra</Link> : <button type="button" className="btn btn-outline-dark border-0" onClick={agregarAlCarrito}>AGREGAR</button>}
      </div>
      </div>
    </div>
  );
};

export default ItemCount;
