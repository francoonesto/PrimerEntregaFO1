import Icon from "./image/cestas.svg";

const CartWidget = () => {
  return (
    <button type="button" className="btn btn-light position-relative m-3">
      <img src={Icon} alt={"ICON"} width={24} />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
        1
      </span>
    </button>
  );
};

export default CartWidget;
