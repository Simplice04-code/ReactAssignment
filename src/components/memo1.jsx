/* .Create a parent component that passes a property to a child component. Use 
React.memo to prevent the child component from re-rendering unnecessarily. */
import React, { useState } from 'react';
const ChildComponent = React.memo(({ message }) => {
    console.log('ChildComponent rendered');
    return <p>{message}</p>;
});
export default function ParentComponent() {
    const [message, setMessage] = useState('Hello from parent!');
    return (
        <div className='p-4 rounded shadow-md'>
            <ChildComponent message={message} />
            <button className='border bg-gray-400 rounded-md p-1' onClick={() => setMessage('Updated message!')}>Update Message</button>
        </div>
    );
}