/* Build a form that logs the user's input to the console when the form is submitted. */
import React, { useState } from 'react';

const SubmitForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    };

    return (
        <div className='p-4 rounded shadow-md '>
            <form className='flex gap-10' onSubmit={handleSubmit}>
                <input
                    className='border border-amber-900 rounded-md'
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter your input"
                />
                <button className="border bg-blue-300 p-2 rounded-md px-4" type="submit">Submit</button>
            </form>
        </div>
    );
};
export default SubmitForm;