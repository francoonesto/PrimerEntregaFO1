import Uno from "./image/moonclar.webp";
import Dos from "./image/moonoscur.webp";

const Main = () => {
  return (
    <div>
      <div className="text-center bg-dark text-light my-3">
        <h1>NEW ARRIVALS</h1>
        <a href="#" className="btn btn-light my-2">
          Descubrelos
        </a>
      </div>
      <div>
        <img
          src={Uno}
          class="img-fluid"
          alt={"UNO"}
          width={500}
          className="col-md-6"
        />
        <img
          src={Dos}
          class="img-fluid"
          alt={"DOS"}
          width={500}
          className="col-md-6"
        />
      </div>
    </div>
  );
};

export default Main;
