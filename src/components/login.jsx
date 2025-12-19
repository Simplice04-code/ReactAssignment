/* .Create a simple login form with fields for username and password. */
import React, { useState } from 'react';    

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className='p-4 rounded shadow-md'>
            <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
                <input

                    className='border border-amber-900 rounded-md p-2'
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    className='border border-amber-900 rounded-md p-2'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <div className='items-center justify-center'>
                    <button className="border bg-blue-300 p-2 rounded-md px-4" type="submit">Login</button>
                </div>
               
            </form>
        </div>
    );
};

export default LoginForm;