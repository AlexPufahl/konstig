import { useState } from "react";

export const useCounter = (stock, initialState) => {

    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        counter < stock && setCounter(prev => prev + 1)
    }

    const decrement = () => {
        counter > initialState && setCounter(prev => prev - 1)
    }
    return {
        counter,
        increment,
        decrement
    }
}

