import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
            <nav>
            <NavLink to="/categoria/Accesorios">Accesorios</NavLink>
            <NavLink to="/categoria/Conjuntos">Conjuntos</NavLink>
            <NavLink to="/Carrito">Carrito</NavLink>
            
            </nav>
    )
}

export default NavBar