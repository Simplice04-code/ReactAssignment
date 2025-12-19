/* .Build a controlled form with a single input field and display the entered value 
below the form. */
import React, { useState } from 'react';

const ControlledForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className='p-4 rounded shadow-md'>
            <form>
                <input
                    className='border border-amber-900 rounded-md p-2'
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Enter text"
                />
            </form>
            <p className='mt-2'>Entered value: {inputValue}</p>
        </div>
    );
};
export default ControlledForm;