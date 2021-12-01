import logo from '../assets/images/logoGamerCave.png'
function Header() {
    return (
        <header>
            <div className="container-logo">
                <a href="http://localhost:3030">
                    <img className="logo" src={logo} alt="Log gamer cave" />
                </a>
            </div>
        </header>
    )
}
export default Header;