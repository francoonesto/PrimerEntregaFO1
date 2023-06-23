import { useEffect, useState } from "react";
//import Productos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc , getDoc, getFirestore } from "firebase/firestore";

const ItemDetailConteiner = () => {
    const [item , setItem] = useState({});
    const {id} = useParams();

//     useEffect(()=>{
//         const promesa = new Promise((resolve) => {
//             setTimeout(() => {
// resolve(Productos.find(item => item.id === parseInt(id)));

//             },2000)
//         })
//         promesa.then (data => {
//             setItem(data);
//         })
//     },[id]);

useEffect(() => {
const db = getFirestore();
const producto = doc(db , "Mercaderia" , id);
getDoc(producto).then(resultado =>{
    setItem({id:resultado.id,...resultado.data()})
});
},[id]);

    return(
        <>
         <ItemDetail producto={item} />
        </>
    )
}

export default ItemDetailConteiner;