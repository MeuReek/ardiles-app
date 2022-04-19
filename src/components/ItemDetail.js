
import { Link } from "react-router-dom"

const ItemDetail = ({producto}) => {
    return (
        <article className="product-detail">
            <img src={producto.imagen}></img>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>$ {producto.precio}</p>
        </article>
    )
}

export default ItemDetail