/* Build a counter component with increment and decrement buttons. */
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className='p-4 rounded shadow-md space-x-1'>
            <p>Count: {count}</p>
            <button className="border bg-grey-700 p-2 rounded-md px-5" onClick={increment}>Increment</button>
            <button className="border bg-grey-400 p-2 rounded-md px-5" onClick={decrement}>Decrement</button>
        </div>
    );
};
export default Counter;