import './ItemCount.css'
import { useState } from "react"

const ItemCount = ({ inicial, stock, funcAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const aumentar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuir = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }
    return (
        <>
            <div>
                <button onClick={disminuir}> - </button>
                <p> {contador} </p>
                <button onClick={aumentar}> + </button>
            </div>
            <button onClick={() => funcAgregar(contador)}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount