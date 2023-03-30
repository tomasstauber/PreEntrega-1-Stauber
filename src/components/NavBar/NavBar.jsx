import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <header>
            <h1>GreenHealth</h1>

            <nav>
                <ul>
                    <li>Cultivo</li>
                    <li>Sistemas Automáticos</li>
                    <li>Parafernalía</li>
                    <li>Asesoramiento</li>
                </ul>
            </nav>

           <CartWidget/>

        </header>
    )
}

export default NavBar