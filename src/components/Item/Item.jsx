import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProd'>
      <h2> {nombre} </h2>
      <img src={img} alt={nombre} />
      <p> ${precio} </p>
      <Link to={`/item/${id}`}> Ver detalles </Link>
    </div>
  )
}

export default Item