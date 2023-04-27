import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from '../../services/firebase/config';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { cat } = useParams();

    useEffect(() => {
        const misProductos = cat ? query(collection(db, "productos"), where("cat", "==", cat)) : collection(db, "productos");

        getDocs(misProductos)
            .then(res => {
                const nuevoArrayProd = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProductos(nuevoArrayProd);
            })
            .catch(error => console.log(error))
    }, [cat])

    return (
        <div className='divPrincipal'>
            <ItemList productos={productos} />
        </div>
    )
}
export default ItemListContainer