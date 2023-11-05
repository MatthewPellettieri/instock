import './header.scss';
import logo from '../../assets/Logo/InStock-Logo.svg'

function Header() {
    return (
        <>
        <header className="background">
            <div className="logo--container">
                <img src={logo} alt="instock logo" className="logo" />
            </div>
            <nav className="button--container">
                <button className="nav__button">Warehouses</button>
                <button className="nav__button">Inventory</button>
            </nav>
        </header>
        </>
    )
}

export default Header;