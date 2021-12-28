import './itemDetail.css';
import { useState } from 'react';
import ItemCount from '../ItemCount/itemCount';
import CartButton from '../CartButton/cartButton.js';
import { useCartContext } from '../../context/cartContext';


const ItemDetail = ({item}) => {
    const {id,pictureUrl,coinName,description,price, stock} = item;
    const [goCart,setGoCart] = useState(true)
    const initialValue =  1;
    const {addItem} = useCartContext();
    
    const onAdd = (quantityToAdd) => {
        setGoCart(false)
        addItem({...item, quantity:quantityToAdd})
    }


    return (
        <div className="itemDetail" key={id}>
            <img src={pictureUrl} alt="Coin image" className="itemDetail__img" />
            <div className="itemDetail__body">
                <h2 className="itemDetail__title">{coinName}</h2>
                <p className="itemDetail__description">{description}</p>
                <h3 className="itemDetail__price">{price}</h3>
                {goCart ? <ItemCount stock={stock} initial={initialValue} onAdd={onAdd} /> : <CartButton/>}
            </div>
        </div>
    )
}

export default ItemDetail;