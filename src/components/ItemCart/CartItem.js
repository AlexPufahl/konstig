import './CartItem.css'

function CartItem ({coinName, quantity}) {
    return (
        <div className='cartItem'>
            <h1 className="cartItem__title">{coinName}</h1>
            <h2 className="cartItem__quantity">Quantity:<span className="carItem__coloredQuantity">{quantity}</span></h2>
        </div>
    )
}

export default CartItem;