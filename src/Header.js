import { Link } from "react-router-dom"
import NavBar from "./components/NavBar"
import logo from "./imagenes/Logo-texto-1.jpg"

function  Header(){
    return (
            <header className="top">
                <Link to="/">
                <img src = {logo} />
                </Link> 
                <NavBar/>
            </header>
    )
}

export default Header