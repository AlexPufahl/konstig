import { Link, NavLink } from 'react-router-dom';
import '../../css/_resets.css';
import '../../css/_variables.css';
import './navBar.css';
import CartWidget from '../CartWidget/cartWidget';


function Navbar() {
  
  return (
    <nav className="navBar">
      {/* Logo */}
      <Link to={'/'} className='navBar__logo'>Konstig</Link>
      {/* Toggle */}
      <div className='navbar__toggle' id="mobile-menu">
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
      {/* List */}
      <ul className="navBar__list">
        {/* Items */}
        <li className="navBar__items"><NavLink exact to={'/'} className='navBar__links' activeClassName='active' >Home</NavLink></li>
        <li className="navBar__items"><NavLink exact to={'/shop'} className='navBar__links' activeClassName='active'>Shop</NavLink></li>
        <li className="navBar__items"><NavLink exact to={'/aboutUs'} className='navBar__links' activeClassName='active'>About Us</NavLink></li>
      </ul>
      {/* CartWidget */}
      <CartWidget />
    </nav>
  );
}

export default Navbar;
