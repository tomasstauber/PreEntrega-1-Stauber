import './Footer.css';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <Link to='/' className='titulo'>
            <h5>GreenHealth</h5>
        </Link>
        <ul>
            <NavLink to={`/categoria/cultivo`}>
                <li>Cultivo</li>
            </NavLink>
            <NavLink to={`/categoria/sistemasautomaticos`}>
                <li>Sistemas Automáticos</li>
            </NavLink>
            <NavLink to={`/categoria/parafernalia`}>
                <li>Parafernalía</li>
            </NavLink>
        </ul>
    </div>
  )
}

export default Footer