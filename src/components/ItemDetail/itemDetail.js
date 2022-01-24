import './itemDetail.css';
import { useState } from 'react';
import ItemCount from '../ItemCount/itemCount';
import CartButton from '../CartButton/cartButton.js';
import { useCartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';


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
        <>
            <div className="itemDetail__breadcrumbs">
                <Link className='breadcrumbs__link' to={'/'}>Home</Link>
                <p className="breadcrumbs__separator">/</p>
                <Link className='breadcrumbs__link' to={'/shop'}>Shop</Link>
            </div>
            <div className="itemDetail" key={id}>
                <img src={pictureUrl} alt={coinName} className="itemDetail__img" />
                <div className="itemDetail__body">
                    <h2 className="itemDetail__title">{coinName}</h2>
                    <p className="itemDetail__description">{description}</p>
                    <h3 className="itemDetail__price">${price}</h3>
                    {goCart ? <ItemCount stock={stock} initial={initialValue} onAdd={onAdd} /> : <CartButton/>}
                </div>
            </div>
        </>
    )
}

export default ItemDetail;