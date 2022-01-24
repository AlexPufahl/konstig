import './itemTable.css'

function ItemTable ({coinImg,coinName,coinPrice}){
    return (
        <div className="ItemTable">
            <div className="itemTable__coinInfo">
                <img src={coinImg} alt="Coin Icon" className="itemTable__img" />
                <h1 className="itemTable__name">{coinName}</h1>
            </div>
            <h2 className="itemTable__lastPrice">Last price: <span className="itemTable__lastPriceColored">${coinPrice}</span></h2>
        </div>
    )
}

export default ItemTable;