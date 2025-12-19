/* .Design a form with validation for email and password fields. */
import React, { useState } from 'react';

const ValidationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
    };

    return (
        <div className='p-4 rounded shadow-md'>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    className='border border-amber-900 rounded-md p-2'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                {errors.email && <p className='text-red-500'>{errors.email}</p>}
                <input
                    className='border border-amber-900 rounded-md p-2'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                {errors.password && <p className='text-red-500'>{errors.password}</p>}
                <button className="w-40 border bg-blue-300 p-2 rounded-md px-4" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ValidationForm;