import './cartButton.css'
import { Link } from "react-router-dom";

function CartButton (){
    return (
        <Link to={'/cart'} className="cartButton">Go to <span className="cartButton__colored">Cart</span></Link>
    )
}

export default CartButton;