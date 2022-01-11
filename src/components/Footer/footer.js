import { Link, NavLink } from 'react-router-dom';
import './footer.css';

function Footer () {
    return (
        <>
            <hr className="footer__spacer"></hr>
            <footer className="footer">
                {/* Logo */}
                <Link to={'/'} className='footer__logo'>Konstig</Link>
                {/* List */}
                <ul className="footer__list">
                    {/* Items */}
                    <li className="footer__items"><NavLink exact to={'/'} className='footer__links' activeClassName='active' >Home</NavLink></li>
                    <li className="footer__items"><NavLink exact to={'/shop'} className='footer__links' activeClassName='active'>Shop</NavLink></li>
                    <li className="footer__items"><NavLink exact to={'/aboutUs'} className='footer__links' activeClassName='active'>About Us</NavLink></li>
                </ul>
                {/*Copyright*/}
                <h2 className='footer_copyright'>© Copyright 2021 Konstig</h2>
            </footer>
        </>
    )
}

export default Footer;