import React from 'react'

const CartItem = ({item, cantidad}) => {
  return (
    <div>
        <h3> {item.nombre} </h3>
        <p>Precio: ${item.precio}</p>
        <p>Cantidad: {cantidad} </p>
    </div>
  )
}

export default CartItem