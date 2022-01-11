import './addToCart.css'

function AddToCart({onAdd,counter}) {
    return (
        <button className="addToCart" onClick={() => onAdd(counter)}>Add to <span className="addToCart__colored">cart</span></button>
    )
}
export default AddToCart;