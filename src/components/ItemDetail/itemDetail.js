import './itemDetail.css';
import ItemCount from '../ItemCount/itemCount';
import { useState } from 'react';
import CartButton from '../CartButton/cartButton.js';

const ItemDetail = ({item}) => {
    const {id,pictureUrl,coinName,description,price, stock} = item;
    const [goCart,setGoCart] = useState(true)
    const initialValue =  1;
    const onAdd = (quantityToAdd) => {
        console.log(quantityToAdd);
        setGoCart(false)
    }


    return (
        <div className="itemDetail" key={id}>
            <img src={pictureUrl} alt="Coin image" className="itemDetail__img" />
            <div className="itemDetail__body">
                <h2 className="itemDetail__title">{coinName}</h2>
                <p className="itemDetail__description">{description}</p>
                <h3 className="itemDetail__price">{price}</h3>
                {goCart ? <ItemCount stock={stock} initial={initialValue} onAdd={onAdd} /> : <CartButton/>  }
                
            </div>
        </div>
    )
}

export default ItemDetail;