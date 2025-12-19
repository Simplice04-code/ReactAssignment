/* 27. Registration Form for Students
• Fields: First Name, Last Name, Email, Student ID, Date of Birth
• Validate the Student ID to ensure it contains only alphanumeric characters. */
import React, { useState } from 'react';

export default function StudentRegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        studentId: '',
        dateOfBirth: ''
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const validate = () => {
        const newErrors = {};
        if (!/^[a-zA-Z0-9]+$/.test(formData.studentId)) {
            newErrors.studentId = 'Student ID must be alphanumeric';
        }
        return newErrors;
    };
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);   
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                studentId: '',
                dateOfBirth: ''
            });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };
    return (
        <div className='p-4 rounded shadow-md'>
            <h2>Student Registration Form</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input  
                    type="text"
                    name="firstName"
                    value={formData.firstName}  
                    onChange={handleChange}
                    placeholder="First Name"
                    className="border p-2 rounded-md"
                />
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
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
                <input  

                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    placeholder="Student ID"
                    className="border p-2 rounded-md"
                />
                {errors.studentId && <span className="text-red-500">{errors.studentId}</span>}
                <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    placeholder="Date of Birth"
                    className="border p-2 rounded-md"
                />
                <button className="border w-25 bg-gray-400 p-2 rounded-md px-4" type="submit">Register</button>
            </form>
        </div>
    );
}