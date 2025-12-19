/* Create a multi-step form where users can fill in details step-by-step (e.g., name, 
address, and payment information). */
import React, { useState } from 'react';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className='p-4 rounded shadow-md'>
            <form  onSubmit={handleSubmit}>
                {step === 1 && (
                    <div className="flex flex-col gap-4">
                        <input
                            className='border border-amber-900 rounded-md p-2'
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                        />
                        <input
                            className='border border-amber-900 rounded-md p-2'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                        />
                        <button className="w-16 border bg-blue-300 p-2 rounded-md px-4" type="button" onClick={nextStep}>Next</button>
                    </div>
                )}
                {step === 2 && (
                    <div className='flex gap-10'>
                        <input
                            className='border border-amber-900 rounded-md p-2'
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Address"
                        />
                        <input
                            className='border border-amber-900 rounded-md p-2'
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="City"
                        />
                        <input
                            className='border border-amber-900 rounded-md p-2'
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            placeholder="Zip Code"
                        />
                        <button className="border bg-blue-300 p-2 rounded-md px-4" type="button" onClick={prevStep}>Back</button>
                        <button className="border bg-blue-300 p-2 rounded-md px-4" type="button" onClick={nextStep}>Next</button>
                    </div>
                )}
                {step === 3 && (
                    <div className='flex gap-10'>
                        <input
                            className='border border-amber-900 rounded-md p-2'
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="Card Number"
                        />
                        <input
                           className='border border-amber-900 rounded-md p-2'
                           type="text"
                           name="expiryDate"
                           value={formData.expiryDate}
                           onChange={handleInputChange}
                           placeholder="Expiry Date (MM/YY)"
                       />
                       <input
                           className='border border-amber-900 rounded-md p-2'
                           type="text"
                           name="cvv"
                           value={formData.cvv}
                           onChange={handleInputChange}
                           placeholder="CVV (3 digits)"
                       />
                       <button className="border bg-blue-300 p-2 rounded-md px-4" type="button" onClick={prevStep}>Back</button>
                       <button className= "w-16 border bg-blue-300 p -2 rounded -md px -4" type ="submit">Submit</ button>
                   </div>
               )}
           </form>
       </div>
   );
};

export default MultiStepForm;