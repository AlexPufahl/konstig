import './checkOutCart.css'
import TrashIcon from '../../assets/Trash.svg'

function CheckOutCart ({coinName, quantity,pictureUrl,deleteItem,id,price}) {
    return (
        <div className='cartItem'>
            <img src={pictureUrl} alt="Coin image" className="cartItem__img" />
            <h1 className="cartItem__title">{coinName}</h1>
            <h2 className="cartItem__quantity">Quantity:<span className="carItem__coloredQuantity">{quantity}</span></h2>
            <h2 className="cartItem__price">Price: <span className="cartItem__priceColored">${price}</span> </h2>
            <button id={id} onClick={deleteItem} className='cartItem__delete'>
                <img src={TrashIcon} alt="Trash icon" />
            </button>
        </div>
    )
}

export default CheckOutCart;