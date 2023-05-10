const NavBar = () => {
return (
<ul className="nav justify-content-center m-3">
  <li className="nav-item">
    <a className="nav-link active text-dark" aria-current="page" href="#">Hombre</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark" href="#">Mujer</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark" href="#">Politica</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark" href="#">Contacto</a>
  </li>
</ul>
)
}

export default NavBar ;