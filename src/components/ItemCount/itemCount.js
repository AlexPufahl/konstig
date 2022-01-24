import { useState } from "react";
import { useCounter } from "../../customHooks/useCounter";
import AddToCart from "../AddToCart/addToCart";
import ItemStock from "../ItemStock/itemStock";
import './itemCount.css';

function ItemCount ({stock, initial,onAdd}) {
    const {counter,increment,decrement} = useCounter(stock, initial);
    return (
        <div className="itemCount">
            <button className="itemCount__decrement" onClick={decrement}>-</button>
            <h2 className="itemCount__quantity">{counter}</h2>
            <button className="itemCount__increment" onClick={increment}>+</button>
            <ItemStock stock={stock}/>
            <AddToCart onAdd={onAdd} counter={counter} stock={stock}/>
        </div>
    )
};

export default ItemCount;