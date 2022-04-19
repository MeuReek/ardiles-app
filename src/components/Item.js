import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (
        <article className="product">
            <img src={producto.imagen}></img>
            <h2>{producto.nombre}</h2>
            <p>$ {producto.precio}</p>
            <button>
                <Link to={`/item/${producto.nombre}`}>Ver Detalle</Link>
            </button>
        </article>
    )
}

export default Item