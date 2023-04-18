import { getProdDetail } from "../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        getProdDetail(id)
            .then(ans => setProducto(ans))
            .catch(error => console.log(error))
    }, [id])

    return (
        <div className="detalleProd">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer