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
                        <NavLink to={`/categoria/1`}> Cultivo </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/2`}> Sistemas Automáticos </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/3`}> Parafernalía </NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />

        </header>
    )
}

export default NavBar