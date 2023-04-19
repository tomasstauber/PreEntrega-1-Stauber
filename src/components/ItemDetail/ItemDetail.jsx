import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img, cat}) => {
    return (
        <div className='itemContainer'>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} />
            <h4>Precio: ${precio}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus similique reprehenderit accusantium cumque, neque ipsa veniam perferendis, totam repellat odio obcaecati molestias illum distinctio esse rem quibusdam, repudiandae ducimus. Atque?</p>
        </div>
    )
}

export default ItemDetail