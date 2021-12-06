import { useCounter } from "../../customHooks/useCounter";
import './itemCount.css';

function ItemCount ({stock, initial}) {
    const {counter,increment,decrement} = useCounter(stock, initial);
    return (
        <div className="itemCount">
            <button className="itemCount__decrement" onClick={decrement}>-</button>
            <h2 className="itemCount__quantity">{counter}</h2>
            <button className="itemCount__increment" onClick={increment}>+</button>
        </div>
    )
};

export default ItemCount;