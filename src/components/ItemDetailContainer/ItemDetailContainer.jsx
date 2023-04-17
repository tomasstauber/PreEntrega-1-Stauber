import { getProdDetail } from "../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getProdDetail("5")
            .then(ans => setProducto(ans))
    }, [])

    return (
        <div className="detalleProd">
            <ItemDetail {...producto} />

        </div>
    )
}

export default ItemDetailContainer