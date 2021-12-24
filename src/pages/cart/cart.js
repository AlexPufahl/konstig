import './cart.css'
import CartItem from '../../components/ItemCart/CartItem.js'
import {useCartContext} from '../../context/cartContext.js'

function Cart () {
    const {cartList,clear} = useCartContext()
    return (
        <section className="cart">
            {cartList.map(item => <CartItem coinName={item.coinName} quantity={item.quantity} />)}
            <button className="cart__buttonClean" onClick={clear}>Empty cart</button>
        </section>

    )
}

export default Cart;