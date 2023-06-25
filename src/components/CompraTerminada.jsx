import { Link, useParams } from "react-router-dom";

const CompraTerminada = () =>{
     const {orderId} = useParams();

    return(
        <div className="container">
        <div className="row">
        <div className="col text-center py-5">
          {orderId ? <div className="alert alert-secondary " role="alert">
              <h1>Gracias por Elegirnos!</h1>
              <p>Tu numero de pedido es : <b>{orderId}</b></p>
              <p><Link to={"/"} className="btn btn-light">Volver al inicio</Link></p>
          </div> : "" }
          </div>
          </div>
          </div>
    )
}

export default CompraTerminada;