import '../../css/_resets.css'
import './cartWidget.css'
import CartIcon from '../../assets/Cart.svg'
import { Link } from 'react-router-dom';

function CartWidget () {
    return (
        <Link to={'/cart'} className="cart__link">
            <img src={CartIcon} alt="Cart icon" className="cart__image" />
        </Link>
    )
}

export default CartWidget;