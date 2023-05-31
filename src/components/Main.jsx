import Uno from "./image/portada1.webp";
import Dos from "./image/portada2.webp";

const Main = () => {
  return (
    <div>
      <div className="text-center bg-dark text-light my-3">
        <h1>NEW ARRIVALS</h1>
      </div>
      <div className="my-5">
        <img
          src={Uno}
          alt={"UNO"}
          width={500}
          className="col-md-6 img-fluid"
        />
        <img
          src={Dos}
          alt={"DOS"}
          width={500}
          className="col-md-6 img-fluid"
        />
      </div>
    </div>
  );
};

export default Main;
