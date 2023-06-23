import { useEffect, useState } from "react";
//import Productos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
//import {getFirestore , collection , getDocs , where , query , addDoc} from "firebase/firestore";
import {getFirestore , collection , getDocs , where , query} from "firebase/firestore";

const ItemListContainer = () => {
const [items , setItems] = useState([]);
const {id} = useParams();

// useEffect (() => {
//   const promesa = new Promise ((resolve) =>{
//     setTimeout(() => {
//       resolve(id ? Productos.filter(item => item.categoria === id) : Productos)
//     },2000);
//   });

// promesa.then(data =>{
//  setItems(data);
// })
// },[id]);

useEffect(() => {
const db = getFirestore();
const productosCollection = collection (db , "Mercaderia");
const q = id ? query(productosCollection , where ("categoria","==",id)) : productosCollection;
getDocs(q).then(resultado => {
  if(resultado.size > 0) {
    setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
  } else {
    console.error ("Error!")
  }
})
},[id]);

// useEffect(() => {
// const db = getFirestore();
// const productosCollection = collection (db , "Mercaderia");

// Productos.forEach(producto => {
//  addDoc (productosCollection , producto);
// });
// console.log("productos cargando en el firestore");
// },[]);

  return (
    <div className="conteiner-fluid my-3">
      <div className="row">
          <ItemList productos={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
