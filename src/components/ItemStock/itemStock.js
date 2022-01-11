import './itemStock.css'

function ItemStock ({stock}){
    return(
        <section className="itemStock">
            <h3 className="itemStock__text">({stock} available)</h3>
        </section>
    )
}

export default ItemStock;