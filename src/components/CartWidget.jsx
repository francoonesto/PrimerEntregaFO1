import { Link } from "react-router-dom";
import Icon from "./image/cestas.svg";
import { CartContext} from "./context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const {cartTotal} = useContext(CartContext);
  return (
    (cartTotal() > 0)  ?
    <Link type="button" className="btn btn-light position-relative m-3" to="./Carrito">
      <img src={Icon} alt={"ICON"} width={24} />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
      {cartTotal()}
      </span>
    </Link> : ""
)
};

export default CartWidget;
