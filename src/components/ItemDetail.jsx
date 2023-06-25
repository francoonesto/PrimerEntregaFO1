import { useContext , useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import {CartContext} from "./context/CartContext";

const ItemDetail = ({ producto }) => {
  const{addItem} = useContext(CartContext);
  const [item, setItem] = useState({});

  const onAdd = (quantity) => {
    addItem(item , quantity);
  }

  useEffect(() => {
    setItem(producto);
  }, [producto]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <img
            src={item.imagen}
            alt={item.nombre}
            className="img-fluid"
          />
        <div className="my-2"><ItemCount stock={item.stock} onAdd={onAdd}/></div>
        <p className="px-4">${item.precio}</p>
        </div>
        <div className="col-md-10">
        <h1 className="display-6 text-center">{item.nombre}</h1>
        <h3 className="h5 text-center py-4">{item.descripcion}</h3>
      </div>
      </div>
    </div>
  );
};

export default ItemDetail;
