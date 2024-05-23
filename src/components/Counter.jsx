import { useState } from "react";

export const Counter = () => {
    let [count, setCount] = useState(1);

    const plus = () => {
        setCount(++count);
    }
    const minus = () => {
        if (count === 0) return;
        setCount(--count);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>

        </>
    );
}
