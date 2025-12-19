/* Create a button that toggles between "ON" and "OFF" states when clicked. */
import React, { useState } from 'react';

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(!isOn);
    };

    return (
        <div className='p-4 rounded shadow-md'>
            <button className='border border-black bg-red-400 p-2 rounded-md px-5' onClick={toggle}>
                {isOn ? 'ON' : 'OFF'}
            </button>
        </div>
    );
};
export default Toggle;