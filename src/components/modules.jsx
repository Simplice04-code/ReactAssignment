/*  Registration Form for Modules
• Fields: Module Name, Module Code, Description, Credits
• Ensure the Credits field accepts only numeric values and is required */
import React, { useState } from 'react';

export default function ModuleRegistrationForm() {
    const [formData, setFormData] = useState({
        moduleName: '',
        moduleCode: '',
        description: '',
        credits: ''
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
        if (!/^\d+$/.test(formData.credits)) {
            newErrors.credits = 'Credits must be a numeric value';
        }
        return newErrors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);
            setFormData({ moduleName: '', moduleCode: '', description: '', credits: '' });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };
    return (
        <div className='p-4 rounded shadow-md'>
            <h2>Module Registration Form</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input
                    type="text"
                    name="moduleName"
                    value={formData.moduleName}
                    onChange={handleChange}
                    placeholder="Module Name"
                    className="border p-2 rounded-md"
                />
                <input
                    type="text"
                    name="moduleCode"
                    value={formData.moduleCode}
                    onChange={handleChange}
                    placeholder="Module Code"
                    className="border p-2 rounded-md"
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="border p-2 rounded-md"
                />
                <input
                    type="text"
                    name="credits"
                    value={formData.credits}
                    onChange={handleChange}
                    placeholder="Credits"
                    className="border p-2 rounded-md"
                />
                {errors.credits && <span className="text-red-500">{errors.credits}</span>}
                <button type="submit" className="w-25 border bg-gray-400 p-2 rounded-md px-4">Register</button>
            </form>
        </div>
    );
}