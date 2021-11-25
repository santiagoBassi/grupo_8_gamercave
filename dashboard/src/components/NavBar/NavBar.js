import './NavBar.css';
import Logo from '../../logoGamerCave.png';
import LiNavBar from '../LiNavBar/LiNavBar';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <div className="containerLogo">
                <img className="logo" src={Logo} />
            </div>
            <ul className="navBar">
                <LiNavBar name="Dashboard - Gamer Cave" route="/" />
                <LiNavBar name="Productos" route="/products" />
                <LiNavBar name="Categorias" route="/catego" />
                <LiNavBar name="Lista de productos" route="/list" />
            </ul>
        </nav>
    )

}

export default NavBar;