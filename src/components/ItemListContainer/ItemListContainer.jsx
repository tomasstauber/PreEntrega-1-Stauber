import { useState, useEffect } from 'react'
import { getProductos } from '../asyncmock'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos()
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className='divPrincipal'>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer