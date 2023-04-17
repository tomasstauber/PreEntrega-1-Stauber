import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img, cat}) => {
    return (
        <div className='itemContainer'>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} />
            <h4>Precio: ${precio}</h4>
            <p> • 1 Programador digital de riego de 2 zonas TREBO ON2000
                • 50 Mts de caño de politileno flexible de 1/2""
                • 2 Acoples rápidos de 1/2""
                • 4 Toberas emergentes
                • 2 Tee de 1/2"" con rosca macho
                • 2 Codos de 1/2"" con rosca macho
                • 4 Codos de 1/2""
            </p>
            <p> {id} </p>
            <p> {cat} </p>
        </div>
    )
}

export default ItemDetail