import './CartWidget.css'

const CartWidget = () => {
    const carritoImg = "https://imgs.search.brave.com/PWRymnf2hLP7lQZp_z7l69IT9BSO1tjLRmd1sXaZMfA/rs:fit:1000:1000:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z180MDcwMTkuc3Zn.svg"
    return (
        <div>
            <img src= {carritoImg} className="carritoImg" alt="Carrito de compras" />
            <strong>2</strong>
        </div>
    )
}

export default CartWidget