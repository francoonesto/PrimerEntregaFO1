import { NavLink } from "react-router-dom";

const NavBar = () => {
return (
<ul className="nav justify-content-center m-3">
  <li className="nav-item">
    <NavLink className="nav-link active text-dark" aria-current="page" to={"/"}>NEW</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link text-dark" to={"/categoria/hombre"}>HOMBRE</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link text-dark" to={"/categoria/mujer"}>MUJER</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link text-dark" to={"/categoria/ninos"}>NIÑOS</NavLink>
  </li>
</ul>
)
}

export default NavBar ;