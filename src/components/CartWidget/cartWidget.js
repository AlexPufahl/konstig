import '../../css/_resets.css'
import './cartWidget.css'
import CartIcon from '../../assets/Cart.svg'

function CartWidget () {
    return (
        <a href="" className="cart__link">
            <img src={CartIcon} alt="Cart icon" className="cart__image" />
        </a>
    )
}

export default CartWidget;