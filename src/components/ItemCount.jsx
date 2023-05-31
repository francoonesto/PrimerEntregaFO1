import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
const [items , setItems] = useState(1);
const [itemStock , setItemStock] = useState(stock);

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

const onAdd = () =>{
  if(items <= itemStock){
    setItemStock(itemStock - items);
    setItems(1);
    alert("Agrego su producto correctamente , desea seguiar agregando?")
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
            class="btn-group"
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
        <button type="button" className="btn btn-outline-dark border-0" onClick={onAdd}>AGREGAR</button>
      </div>
      </div>
    </div>
  );
};

export default ItemCount;
