
import DetailButton from "../DetailButton/DetailButton";
import "./item.css";

function Item ({itemId, coinName, pictureUrl, price, description}) {
    return(
        <div className="item" key={itemId}>
            <img src={pictureUrl} alt="Coin image" className="item__img" />
            <h2 className="item__title">{coinName}</h2>
            <p className="item__description">{description}</p>
            <h3 className="item__price">${price}</h3>
            <DetailButton coinName={coinName} itemId={itemId}/>
        </div>
    )
}

export default Item;