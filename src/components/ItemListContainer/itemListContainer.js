import './itemListContainer.css';

function ItemListContainer ({greeting}) {
    return (
        <div className="itemListContainer__container">
            <h1 className="itemListContainer__title">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;