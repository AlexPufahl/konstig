import './_resets.css'
import './_variables.css'
import './navBar.css';

function Navbar() {
  
  return (
    <nav className="navBar">
      {/* Logo */}
      <a href="#home" className='navBar__logo'>Konstig</a>
      {/* Toggle */}
      <div className='navbar__toggle' id="mobile-menu">
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
      {/* List */}
      <ul className="navBar__list">
        {/* Items */}
        <li className="navBar__items"><a href="#" className='navBar__links'>Home</a></li>
        <li className="navBar__items"><a href="#" className='navBar__links'>Shop</a></li>
        <li className="navBar__items"><a href="#" className='navBar__links'>About Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
