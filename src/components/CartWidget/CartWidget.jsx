import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const CartWidget = () => {

    const {carrito} = useContext(CarritoContext);

    const totalItems = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    const carritoImg = "https://imgs.search.brave.com/PWRymnf2hLP7lQZp_z7l69IT9BSO1tjLRmd1sXaZMfA/rs:fit:1000:1000:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z180MDcwMTkuc3Zn.svg"
    return (
        <Link to='/cart'>
            <img src= {carritoImg} className="carritoImg" alt="Carrito de compras" />
            {totalItems}
        </Link>
    )
}

export default CartWidget