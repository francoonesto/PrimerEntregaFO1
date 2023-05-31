import CartWidget from "./CartWidget";
import NavBar from "./NavBar";
import Portada from "./image/zara.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-2 bg-dark">
          <Link to={'/'}><img src={Portada} alt={"LOGO"} width={48} /></Link>
        </div>
        <div className="col-md-6 bg-dark text-end">
          <Link to={"#"} className="text-decoration-none btn btn-light m-2">Sucursales</Link>
          <Link to={"#"} className="text-decoration-none btn btn-light">Ayuda</Link>
        </div>
        <div className="col-md-6  offset-3 text-center">
        <NavBar/>
        </div>
        <div className="col text-end">
        <CartWidget/>
        </div>
      </div>
    </div>
  );
};

export default Header;
