/* .Build a form with multiple checkbox inputs and display the selected options. */
import React, { useState } from 'react';

const CheckboxForm = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (option) => {
        setSelectedOptions(prev => {
            if (prev.includes(option)) {
                return prev.filter(item => item !== option);
            } else {
                return [...prev, option];
            }
        });
    };

    return (
        <div className='p-4 rounded shadow-md'>
            <h2 className='text-xl font-bold mb-4'>Select your favorite Show:</h2>
            <div className="flex flex-col gap-2">
                {['IT: Welcome to Derry', 'Zootopia 2', 'The Fate of Farious', 'The Chainsaw Man'].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={selectedOptions.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                        />
                        {option}
                    </label>
                ))}
            </div>
            <p className='mt-4'>The selected options: {selectedOptions.join(', ')}</p>
        </div>
    );
};

export default CheckboxForm;