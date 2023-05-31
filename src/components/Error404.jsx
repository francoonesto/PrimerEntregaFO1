import Error from "./image/error404quees.jpg"

const Error404 = () => {
    return(
        <div className="conteiner-fluid">
        <div className="row">
        <div className="col text-center">
            <img src={Error} alt="ERROR404" className="img-fluid"/>
        </div>
        </div>
        </div>
    )
}

export default Error404;