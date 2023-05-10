import CartWidget from "./CartWidget";
import NavBar from "./NavBar";
import Portada from "./image/m-logo.webp";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-2 bg-dark">
          <a href="../index.html"><img src={Portada} alt={"LOGO"} width={32} /></a>
        </div>
        <div className="col-md-6 bg-dark text-end">
          <a href="#" className="text-decoration-none btn btn-light m-2">Sucursales</a>
          <a href="#" className="text-decoration-none btn btn-light">Ayuda</a>
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
