/* . Registration Form for Lecturers
• Fields: Name, Email, Subject, Phone Number
• Add validation to ensure the email is in the correct format and phone number is 
numeric. */
import React, { useState } from 'react';

export default function LecturerRegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: ''
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
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
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
            setFormData({ name: '', email: '', subject: '', phone: '' });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }   
    };
    return (
        <div className='p-4 rounded shadow-md'>
            <h2>Lecturer Registration Form</h2>
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border p-2 rounded-md"
                />  
                {errors.email && <span className="text-red-500">{errors.email}</span>}
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
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
                <button type="submit" className=" w-25 border bg-gray-400 p-2 rounded-md px-4">Register</button>
            </form>
        </div>
    );
}
