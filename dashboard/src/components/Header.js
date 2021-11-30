import logo from '../assets/images/logoGamerCave.png'
function Header() {
    return (
        <header>
            <div className="container-logo">
                <img className="logo" src={logo} alt="Log gamer cave"/>
            </div>
        </header>
    )
}

export default Header;