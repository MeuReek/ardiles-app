import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Loader from "./Loader"

import baberos from "../../src/imagenes/Baberos.jpg"
import ItemDetail from "./ItemDetail"


const productoIndividual = 
    {   
        id: 1,
        nombre:"Babero",
        precio: 500,
        imagen: baberos,
        descripcion: "Descripcion del producto",
        categoria: "Accesorios"
    }


const ItemDetailContainer = () =>{

    const [cargando, setCargando] = useState(true)
    const [producto, setProducto] = useState({})
    const {id} = useParams()
    
    
    useEffect(() => {
        setTimeout(() => {
        const pedido = fetch(productoIndividual)
        pedido
            .then((respuesta) => {
                console.log(respuesta);
                return respuesta.json()
            })
    
            .then((datos) => {
                const resultado = datos.results.map((dato)=>{
                    return fetch(dato.url)
                })
    
                return Promise.all(resultado)
            })
    
            .then((datos) => {
                const resultado = datos.map((response)=>{
                    return response.json()
                })
                return Promise.all(resultado)
            })
    
            .then((ropa) => {
                if(id){
    
                }else{
                    setProducto(ropa)
                }
            })
            .catch((respuestaError) => {
                console.log("Error al cargar");
            })
            .finally(() => {
                setCargando(false)
            })
    
            setProducto(productoIndividual)
            setCargando(false)
        },3000)
    },[id])
    
    
    if(cargando){
        return <Loader/>
    }else{
        return(
        <div>
                <ItemDetail producto={producto}/>
        </div>
        )
    }
    }
    

export default ItemDetailContainer