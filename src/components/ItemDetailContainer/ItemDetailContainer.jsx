import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/config";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const newDoc = doc(db, "productos", id);

        getDoc(newDoc)
            .then(res => {
                const data = res.data();
                const newProd = { id: res.id, ...data }
                setProducto(newProd)
            })
            .catch(error => console.log(error))
    }, [id])

    return (
        <div className="detalleProd">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer