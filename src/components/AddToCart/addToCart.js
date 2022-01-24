import { useEffect, useState } from 'react';
import './addToCart.css'

function AddToCart({onAdd,counter,stock}) {
    const [buttonStatus,setButtonStatus] = useState(false)
    useEffect(
        () => {
            if (stock === 0) {
                setButtonStatus(true)
            }else {
                setButtonStatus(false)
            }
        },[stock]
    )    
    return (
        <button disabled={buttonStatus} className="addToCart" onClick={() => onAdd(counter)}>{buttonStatus ? <>No stock</> : <>Add to <span className="addToCart__colored">cart</span></>}</button>
    )
}
export default AddToCart;