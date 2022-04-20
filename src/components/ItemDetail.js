
import { Link } from "react-router-dom"

const ItemDetail = ({producto}) => {
    return (
        <article className="product-detail">
            <img src={producto.imagen}></img>
            <p>{producto.id}</p>
            <h2>{producto.nombre}</h2>
            <h3>{producto.descripcion}</h3>
            <p>$ {producto.precio}</p>
        </article>
    )
}

export default ItemDetail