import './itemDetail.css';
import ItemCount from '../ItemCount/itemCount';
import BuyButton from '../BuyButton/buyButton';

const ItemDetail = ({item}) => {
    const {id,pictureUrl,coinName,description,price} = item;
    const itemStock = 10;
    const initialValue =  1;
    return (
        <div className="itemDetail" key={id}>
            <img src={pictureUrl} alt="Coin image" className="itemDetail__img" />
            <div className="itemDetail__body">
                <h2 className="itemDetail__title">{coinName}</h2>
                <p className="itemDetail__description">{description}</p>
                <h3 className="itemDetail__price">{price}</h3>
                <ItemCount stock={itemStock} initial={initialValue} />
                <BuyButton coinName={coinName} />
            </div>
        </div>
    )
}

export default ItemDetail;