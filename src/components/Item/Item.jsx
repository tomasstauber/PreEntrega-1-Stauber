import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img, cat}) => {
  return (
    <div className='cardProd'>
      <h2> {nombre} </h2>
      <img src={img} alt={nombre} />
      <p> ${precio} </p>
      <p> {id} {cat}  </p>
      <Link to={`/item/${id}`}/> Ver detalles <Link/>
    </div>
  )
}

export default Item