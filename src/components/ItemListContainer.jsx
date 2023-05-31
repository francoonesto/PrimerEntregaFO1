import { useEffect, useState } from "react";
import Productos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
const [items , setItems] = useState([]);
const {id} = useParams();

useEffect (() => {
  const promesa = new Promise ((resolve) =>{
    setTimeout(() => {
      resolve(id ? Productos.filter(item => item.categoria === id) : Productos)
    },2000);
  });

promesa.then(data =>{
 setItems(data);
})
},[id]);

  return (
    <div className="conteiner-fluid my-3">
      <div className="row">
          <ItemList productos={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
