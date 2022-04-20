import { useEffect, useState } from "react"
import	{ useParams } from "react-router-dom"

import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import Loader from "./Loader"

import baberos from "../../src/imagenes/Baberos.jpg"
import babita from "../../src/imagenes/Babita.jpg"
import conjuntoCielo from "../../src/imagenes/Conjunto-Cielo.jpg"
import conjuntoFlor from "../../src/imagenes/ConjuntoFlor.jpg"
import { toast } from "react-toastify"



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

const ItemListContainer = () =>{

const [elejido, setElejido] = useState(false)
const [cargando, setCargando] = useState(true)
const [productos, setProductos] = useState([])
const {nombreCat} = useParams()

useEffect(() => {
    setTimeout(() => {
    if (!nombreCat) {
        const pedido = fetch(productosIniciales)
        pedido
            .then((respuesta) => {
            return respuesta.json()
            })
        .   then((datos) => {
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
            .catch((respuestaError) => {
            toast.error(`Error al cargar`)
            })
            .finally(() => {
                setCargando(false)
            })

            setProductos(productosIniciales)
            setCargando(false)
    }else{
    const filtro = productosIniciales.filter((prod) => prod.categoria === nombreCat)
    const pedido = fetch(filtro)
        pedido
            .then((respuesta) => {
            return respuesta.json()
            })
        .   then((datos) => {
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
            .catch((respuestaError) => {
            toast.error(`Error al cargar`)
            })
            .finally(() => {
                setCargando(false)
            })

            setProductos(filtro)
            setCargando(false)
        }
    },3000)
},[nombreCat])


const onAdd = (unidadElejida) =>{
    if(unidadElejida != undefined){
        setElejido(unidadElejida)
    }
}

if(cargando){
    return <Loader/>
}else{
    return(
    <div>
            <ItemList productos={productos}/>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            <p>Se seleccionó {elejido} item/s correctamente"</p>
    </div>
    )
}
}

export default ItemListContainer