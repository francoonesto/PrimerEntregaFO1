import { useEffect, useState } from "react";
import Productos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
    const [item , setItem] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
resolve(Productos.find(item => item.id === parseInt(id)));

            },2000)
        })
        promesa.then (data => {
            setItem(data);
        })
    },[id]);

    return(
        <>
         <ItemDetail producto={item} />
        </>
    )
}

export default ItemDetailConteiner;