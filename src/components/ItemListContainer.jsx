import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getFirestore , collection , getDocs , where , query} from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
const [items , setItems] = useState([]);
const [loading , setLoading] = useState(true);
const {id} = useParams();

useEffect(() => {
const db = getFirestore();
const mercaderiaCollection = collection (db , "Mercaderia");
const q = id ? query(mercaderiaCollection , where ("categoria","==",id)) : mercaderiaCollection;
getDocs(q).then(resultado => {
  if(resultado.size > 0) {
    setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
    setLoading(false);
  } else {
    console.error ("Error!")
  }
})
},[id]);

  return (
    <div className="conteiner-fluid my-3">
      <div className="row">
         {loading ? <Loading /> : <ItemList productos={items} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
