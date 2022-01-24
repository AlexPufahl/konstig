import './itemList.css'
import Item from '../Item/item';

function ItemList ({coin}) {
    return (
        <div className="itemList__container">
            {coin.map(coin => <Item key={coin.id} itemId={coin.id} coinName={coin.coinName} pictureUrl={coin.pictureUrl} description={coin.description} price={coin.price}></Item>)}
        </div>

    )
}

export default ItemList;