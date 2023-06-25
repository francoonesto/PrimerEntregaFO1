import { useContext } from "react";
import {CartContext} from "./context/CartContext";
import cestocart from "./image/cestocart.svg";
import { Link } from "react-router-dom";

const Carrito = () => {
const {cart, cartTotal , sumaTotal , removeItem , clear } = useContext(CartContext);

if (cartTotal() === 0 ) {
    return(
        <div className="container">
            <div className="row">
            <div className="col text-center">
<div className="alert alert-danger" role="alert">No se encontraron productos!</div>
            </div>

            </div>
        </div>
    )
}

    return(
        <div className="container">
        <div className="row">
            <div className="col">
            <h1 className="text-center">producto seleccionado</h1>
        </div>
        </div>
        <div className="row">
            <div className="col"></div>
            <table className="table">
            <tbody>
            <tr>
            <td colSpan={4}>&nbsp;</td>
            <td>&nbsp;</td>
        <td colSpan={3} className="text-end"><button className="btn btn-light border-0" onClick={() => {clear()}}>Vaciar Carrito</button> </td>
        </tr>
            {
    cart.map(item => (<tr key={item.id}>
        <td><img src={item.imagen} alt={item.nombre} width={80} /> </td>
        <td className="align-middle">{item.nombre}</td>
        <td className="align-middle"> {item.cantidad} x ${item.precio} </td>
        <td>&nbsp;</td>
        <td className="align-middle text-center">${item.cantidad * item.precio}</td>
        <td colSpan={3} className="align-middle text-end"><button className="btn btn-light border-0" onClick={() => removeItem(item.id)}><img src={cestocart} alt="eliminar" width={40} /></button></td>
    </tr>))
    }
    <tr>
        <td  colSpan={3}  className="py-2 align-middle">Total a pagar : </td>
        <td>&nbsp;</td>
        <td className="align-middle text-center">${sumaTotal()}</td>
        <td colSpan={3} className="align-middle text-end"><Link to={"/checkout"} className="btn btn-light border-0">Finalizar compra</Link> </td>
    </tr>
    </tbody>
            </table>
    </div>
</div>)}

export default Carrito;