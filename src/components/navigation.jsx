/* .Build a navigation bar with links to different routes using React Router. */
import React from 'react';
import { Link } from 'react-router-dom';
export default function Navigation() {
    return (
        <nav className='p-4 rounded shadow-md'>
            <ul className='flex gap-10'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}