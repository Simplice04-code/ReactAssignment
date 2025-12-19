/* Build a component that displays a counter. Use React.memo to optimize a list of 
unrelated items from re-rendering. */
import React, { useState } from 'react';

const UnrelatedItem = React.memo(({ item }) => {
    console.log(`Rendering item: ${item}`);
    return <li>{item}</li>;
}); 
export default function CounterWithList() {
    const [count, setCount] = useState(0);
    const items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];
    return (
        <div className='p-4 rounded shadow-md'>
            <h2>Counter: {count}</h2>
            <button className="border bg-gray-400 p-2 rounded-md px-5mt-2" onClick={() => setCount(count + 1)}>Increment Counter</button>
            <ul className="mt-4">
                {items.map((item, index) => (
                    <UnrelatedItem key={index} item={item} />
                ))}
            </ul>
        </div>
    );
}
