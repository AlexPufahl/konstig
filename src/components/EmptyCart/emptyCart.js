import './emptyCart.css'
import { Link } from 'react-router-dom';

function EmptyCart() {
    return(
        <section className="emptyCart">
            <h2 className="emptyCart__title">Look's like this is empty</h2>
            <Link to={'/shop'} className='emptyCart__link'>Go to shop...</Link>
        </section>
    )    
}

export default EmptyCart;