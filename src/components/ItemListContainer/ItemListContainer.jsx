import { useState, useEffect } from 'react';
import { getProductos, getProdCat } from '../asyncmock';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { cat } = useParams();

    useEffect(() => {

        const funcionProds = cat ? getProdCat : getProductos;

        funcionProds(cat)
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.error(error))
    }, [cat])

    return (
        <div className='divPrincipal'>
            <ItemList productos={productos} />
        </div>
    )
}
export default ItemListContainer