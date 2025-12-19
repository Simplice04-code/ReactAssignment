/* Registration Form for Books
• Fields: Book Title, Author, ISBN, Published Year
• Validate that the Published Year is a four-digit number. */
import React, { useState } from 'react';

export default function BookRegistrationForm() {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        isbn: '',
        publishedYear: ''
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
        if (!/^\d{4}$/.test(formData.publishedYear)) {
            newErrors.publishedYear = 'Published Year must be a four-digit number';
        }
        return newErrors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);
            setFormData({ title: '', author: '', isbn: '', publishedYear: '' });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };
    return (
        <div className='p-4 rounded shadow-md'>
            <h2>Book Registration Form</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Book Title"
                    className="border p-2 rounded-md"
                />
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Author"
                    className="border p-2 rounded-md"
                />
                <input
                    type="text"
                    name="isbn"
                    value={formData.isbn}
                    onChange={handleChange}
                    placeholder="ISBN"
                    className="border p-2 rounded-md"
                />
                <input
                    type="text"
                    name="publishedYear"
                    value={formData.publishedYear}
                    onChange={handleChange}
                    placeholder="Published Year"
                    className="border p-2 rounded-md"
                />
                {errors.publishedYear && <span className="text-red-500">{errors.publishedYear}</span>}
                <button type="submit" className="w-25 border bg-gray-400 p-2 rounded-md px-4">Register</button>
            </form>
        </div>
    );
}