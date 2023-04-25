import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {

    const { carrito, vaciarCarrito } = useContext(CarritoContext);

    const totalItems = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    const totalCompra = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    if (totalItems === 0) {
        return (
            <>
                <h2>El carrito está vacio</h2>
                <Link to='/'> Seguir comprando </Link>
            </>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto} {...producto} />)}
            <h3>El total de la compra es de: ${totalCompra}</h3>
            <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
            <Link to='/checkout'>Finalizar compra</Link>
        </div>
    )
}

export default Cart