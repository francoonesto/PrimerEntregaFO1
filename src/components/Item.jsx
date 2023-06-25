import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card border-0">
        <Link to={"/item/" + producto.id} className="text-decoration-none text-dark">
          <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">{producto.descripcion}</p>
            <p>${producto.precio}</p>
          </div>
        </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
