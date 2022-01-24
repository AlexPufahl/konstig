import '../../css/_resets.css'
import './cartWidget.css'
import CartIcon from '../../assets/Cart.svg'
import { Link } from 'react-router-dom';
import {useCartContext} from '../../context/cartContext.js'

function CartWidget () {
    const {getCartNumber} = useCartContext();
    return (
        <Link to={'/cart'} className="cart__link">
            <img src={CartIcon} alt="Cart icon" className="cart__image" />
            <h2 className={(getCartNumber !== 0) ?"cart__number" : "display-none"}>{getCartNumber}</h2>
        </Link>
    )
}

export default CartWidget;