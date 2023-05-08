import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const ItemDetail = ({ id, nombre, precio, img, desc, stock }) => {

    const [aumentarCant, setAumentarCant] = useState(0);

    const { agregarAlCarrito } = useContext(CarritoContext);

    const handleCantidad = (cantidad) => {
        setAumentarCant(cantidad);

        const item = { id, nombre, precio };
        agregarAlCarrito(item, cantidad);
    }


    return (
        <>
            <div className='itemContainer'>
                <div className='contImg'>
                    <img src={img} alt={nombre} />
                </div>
                <div className='contDetail'>
                    <h3>{nombre}</h3>
                    <p> {desc} </p>
                    <h4>Precio: ${precio}</h4>
                </div>
                <div className='contBtns'>
                    {
                        aumentarCant > 0 ? (<Link to="/cart">Finalizar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcAgregar={handleCantidad} />)
                    }
                    <Link to='/'>Seguir comprando</Link>
                </div>
            </div>
        </>
    )
}

export default ItemDetail