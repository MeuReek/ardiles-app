import 'animate.css'
import loading from "../imagenes/koala-loader.png"

const Loader = () => {
    return (
        <>
            <img src={ loading } className="loader animate__animated animate__flip animate__repeat-2"/>
        </>
    )

}

export default Loader