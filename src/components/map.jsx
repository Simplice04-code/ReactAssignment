/* Build a component to display a list of items using the .map() function. */
import React from 'react';
const ItemList = () => {
    const items = ['First Item', 'Second Item', 'Third Item', 'Fourth Item'];
    return (
        <div className='p-4 rounded shadow-md'>
            {items.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
};
export default ItemList;
