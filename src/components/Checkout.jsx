import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";


const Checkout = () => {
const [nombre, setNombre] = useState("");
const [email , setEmail] = useState("");
const [telefono , setTelefono] =useState("");
const {cart , clear , sumaTotal} = useContext(CartContext);
const [orderId , setOrderId] = useState ("");

const confirmarPedido = () => {
if (nombre.length === 0) {
    return false;
}
if (email.length === 0) {
    return false;
}
if (telefono.length === 0) {
    return false;
}

const comprador = {name:nombre , phone:telefono , email:email}
const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio , cantidad:item.cantidad}));
const fecha = new Date();
const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
const total = sumaTotal();
const order = {comprador:comprador , items:items , date:date , total:total};

const db = getFirestore();
const ordersCollection = collection(db , "orders");
addDoc(ordersCollection , order).then(resultado => {
    setOrderId(resultado.id);
    clear();
})
}

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-4">
          <form>
            <div className="mb-3">
              <label className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control" onInput={(e) => {setNombre(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control" onInput={(e) => {setEmail(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Teléfono
              </label>
              <input
                type="text"
                className="form-control" onInput={(e) => {setTelefono(e.target.value)}}
              />
            </div>
            <button type="button" className="btn btn-light" onClick={confirmarPedido}>
              CONFIRMAR PEDIDO
            </button>
          </form>
        </div>
        <div className="col-md-6 offset-2 py-1">
        <table className="table">
            <tbody>
            {
    cart.map(item => (<tr key={item.id}>
        <td><img src={item.imagen} alt={item.nombre} width={80} /> </td>
        <td className="align-middle">{item.nombre}</td>
        <td className="align-middle"> {item.cantidad} x ${item.precio} </td>
        <td>&nbsp;</td>
        <td className="align-middle text-center">${item.cantidad * item.precio}</td>
    </tr>))
    }
    <tr>
        <td  colSpan={3}  className="py-2 align-middle">Total a pagar : </td>
        <td>&nbsp;</td>
        <td className="align-middle text-center">${sumaTotal()}</td>
    </tr>
    </tbody>
            </table>
        </div>
      </div>
      <div className="row">
        <div className="col text-center py-5">
          {orderId ? <Navigate to={"/compraterminada/" + orderId} /> : "" }
        </div>
        </div>
    </div>
  );
};

export default Checkout;
