import './header.scss';
import logo from '../../assets/Logo/InStock-Logo.svg'
import { NavLink, Link } from 'react-router-dom';

function Header() {
    const wareHousePage = '/';
    return (
        <>
        <header className="background">
            <Link className='link' to={wareHousePage}>
            <div className="logo--container">
                <img src={logo} alt="instock logo" className="logo" />
            </div>
            </Link>
            <nav className="button--container">
                <NavLink to={'/'} className='navLink' >
                    {({isActive}) => (
                        <button className={isActive ? "active" : "nav__button"}>Warehouses</button>
                    )}
                </NavLink>
                <NavLink to={'/inventory'} className='navLink' >
                {({isActive}) => (
                        <button className={isActive ? "active" : "nav__button"}>Inventory</button>
                    )}
                </NavLink>
            </nav>
        </header>
        </>
    )
}

export default Header;