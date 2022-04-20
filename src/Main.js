import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer"
import CartWidget from "./components/CartWidget";
import ItemDetailContainer from "./components/ItemDetailContainer"

const Main = (props) => {


    return (
        <main className="container">
            <h1>Bienvenido!</h1>       
            <Routes> 
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/categoria/:nombreCat" element={<ItemListContainer/>} />
                <Route path="/carrito" element={<CartWidget/>} />
                <Route path="/item/:nombre" element={<ItemDetailContainer />} />
            </Routes>
        </main>
    )
}

            

export default Main