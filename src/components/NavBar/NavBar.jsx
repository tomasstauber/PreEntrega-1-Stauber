import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Link to={"/"}>
                <h1>GreenHealth</h1>
            </Link>

            <nav className='navBar'>
                <ul>
                    <li>
                        <NavLink to={`/categoria/cultivo`}> Cultivo </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/sistemasautomaticos`}> Sistemas Automáticos </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/parafernalia`}> Parafernalía </NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />

        </header>
    )
}

export default NavBar