/*  Registration Form for Drivers
• Fields: Name, License Number, Phone Number, Vehicle Type
• Add a dropdown to select the vehicle type (e.g., car, truck, motorcycle). */
import React, { useState } from 'react';

export default function DriverRegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        licenseNumber: '',
        phone: '',
        vehicleType: 'car'
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const validate = () => {
        const newErrors = {};
        if (!/^\d+$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be numeric';
        }
        return newErrors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();    
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);
            setFormData({ name: '', licenseNumber: '', phone: '', vehicleType: 'car' });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };
    return (
        <div className='p-4 rounded shadow-md'>
            <h2>Driver Registration Form</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="border p-2 rounded-md"
                />
                <input
                    type="text"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    placeholder="License Number"
                    className="border p-2 rounded-md"
                />
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="border p-2 rounded-md"
                />
                {errors.phone && <span className="text-red-500">{errors.phone}</span>}
                <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="border p-2 rounded-md"
                >
                    <option value="car">Car</option>
                    <option value="truck">Truck</option>
                    <option value="motorcycle">Motorcycle</option>
                </select>
                <button type="submit" className="w-25 border bg-gray-400 p-2 rounded-md px-4">Register</button>
            </form>
        </div>
    );
}