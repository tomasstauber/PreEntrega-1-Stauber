import './Item.css'

const Item = ({id, nombre, precio, img, cat}) => {
  return (
    <div className='cardProd'>
      <h2> {nombre} </h2>
      <img src={img} alt={nombre} />
      <p> ${precio} </p>
      <p> {id} {cat}  </p>
      <button className='btnProd'>Ver detalles</button>
    </div>
  )
}

export default Item