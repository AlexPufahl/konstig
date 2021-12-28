import './cart.css'
import CartDisplay from '../../components/CartDisplay/cartDisplay.js';
import EmptyCart from '../../components/EmptyCart/emptyCart.js';
import { useCartContext } from '../../context/cartContext';


function Cart () {
    let cartStatus = 0;
    const {cartList} = useCartContext();
    if (cartList.length === 0 ) { cartStatus = true} else { cartStatus = false}
    return (    
        <>
        {(cartStatus ) ? <EmptyCart/> : <CartDisplay/>}      
        </>    
    )
}

export default Cart;