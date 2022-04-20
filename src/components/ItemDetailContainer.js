import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import baberos from "../../src/imagenes/Baberos.jpg"
import babita from "../../src/imagenes/Babita.jpg"
import conjuntoCielo from "../../src/imagenes/Conjunto-Cielo.jpg"
import conjuntoFlor from "../../src/imagenes/ConjuntoFlor.jpg"
import ItemDetail from "./ItemDetail"


const productosIniciales = [
    {   
        id: 1,
        nombre:"Babero",
        precio: 500,
        imagen: baberos,
        descripcion: "Descripcion del producto",
        categoria: "Accesorios"
    },
    {   
        id: 2,
        nombre:"Babita",
        precio: 700,
        imagen: babita,
        descripcion: "Descripcion del producto",
        categoria: "Accesorios"
    },
    {   
        id: 3,
        nombre:"Conjunto Cielo",
        precio: 1500,
        imagen: conjuntoCielo,
        descripcion: "Descripcion del producto",
        categoria: "Conjuntos"
    },
    {   
        id: 4,
        nombre:"Conjunto Flor",
        precio: 1400,
        imagen: conjuntoFlor,
        descripcion: "Descripcion del producto",
        categoria: "Conjuntos"
    }
]

const ItemDetailContainer = () =>{

    const [producto, setProducto] = useState({})
    const {nombre} = useParams()
    
    
    useEffect(() => {
        setTimeout(() => {
            if (nombre) {
        const filtro = productosIniciales.filter((prod) => prod.nombre === nombre)
        const pedido = fetch(filtro)
        //pedido
        //     .then((respuesta) => {
        //         return respuesta.json()
        //     })
    
        //     .then((datos) => {
        //         const resultado = datos.results.map((dato)=>{
        //             return fetch(dato.url)
        //         })
    
        //         return Promise.all(resultado)
        //     })
    
        //     .then((datos) => {
        //         const resultado = datos.map((response)=>{
        //             return response.json()
        //         })
        //         return Promise.all(resultado)
        //     })
        //     .then((ropa) => {
        //         if(ropa){

        //         }else{
        //             setProducto(ropa)
        //         }
        //     })
        //     .catch((respuestaError) => {
        //         toast.error(`Error al cargar`)
        //     })
        //     .finally(() => {
        //     })    
        //     setProducto(filtro)           
        // }else{
        //     toast.warning("No se encontro producto")
        //     return
        }
        },1000)
    },[nombre])

        return(
        <div>
                <ItemDetail producto={producto}/>
        </div>
        )
    
    }
    

export default ItemDetailContainer