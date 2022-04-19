import { useState } from "react"


function ItemCount({stock, initial, onAdd}) {

    let [contador, setContador] = useState(initial)

    const handleClick = (e) => {    
        if(contador < stock){
            setContador(contador + 1)
        }else{
            alert("No hay stock disponible")
        }
}

    const restar = (e) => {
        if(contador > initial){
            setContador(contador - 1)
        }else{
            alert("No se puede ingresar stock negativo")
        }
    }
    
    const confirmar = (e) => {
        onAdd(contador)
    }

    return(
            <div>
                <p>Contador: {contador}</p>
                <button onClick={handleClick}>+</button>
                <button onClick={restar}>-</button>
                <button onClick={confirmar}>Agregar al Carrito</button>
            </div>
    )
}

export default ItemCount