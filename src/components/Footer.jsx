import Cartel from "./image/cuotas.webp";
import Facebook from "./image/facebook.svg";
import Wsp from "./image/whatsapp-_1_.svg";
import Ig from "./image/ig.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="conteiner-fluid bg-dark text-light py-3">
      <div className="row">
        <div className="col-md-4">
          <h6 className="m-1">Sucursales</h6>
        </div>
        <div className="col-md-4 text-center">
          <img src={Cartel} alt={"cuotas"} width={50} />
        </div>
        <div className="col-md-4 text-end">
          <Link to={"https://www.facebook.com/profile.php?id=100069270763124"}>
            <img
              src={Facebook}
              alt={"Facebook"}
              width={50}
              className="m-2"
            />
          </Link>
          <Link to={"https://wa.link/hb6z49"}>
            <img src={Wsp} alt={"Wsp"} width={50} className="m-2" />
          </Link>
          <Link to={"https://www.instagram.com/maldivas_outfit/"}>
            <img src={Ig} alt={"Ig"} width={50} className="m-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
