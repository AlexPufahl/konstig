import './cartDisplay.css'
import CartItem from '../../components/CartItem/CartItem.js'
import {useCartContext} from '../../context/cartContext.js'
import { Link } from 'react-router-dom';

function CartDisplay() {
    const {cartList,clear, getTotalCost,deleteItem} = useCartContext();
    let totalCost = getTotalCost(cartList)
    return (
        <section className="cart">
            {cartList.map(item => <CartItem key={item.id} id={item.id} coinName={item.coinName} quantity={item.quantity} pictureUrl={item.pictureUrl} deleteItem={()=>deleteItem(item)} price={item.price} />)}
            <h2 className='cart__totalPrice'>Total price: <span className="cart__totalPriceColored">${totalCost}</span></h2>
            <div className="cart__buttons">
                <button className="cart__buttonClean" onClick={clear}>Empty cart</button>
                <Link to={'/checkOut'} className="cart__buttonCheckout">Check out</Link>
            </div>
        </section>
    )
}

export default CartDisplay;