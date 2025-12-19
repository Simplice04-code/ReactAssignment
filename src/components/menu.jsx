/* .Create a dropdown menu component that shows and hides options when clicked. */
import React, { useState } from 'react';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);    

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='p-4 rounded shadow-md'>
            <button className="border bg-gray-400 p-2 rounded-md px-4" onClick={toggleMenu}>
                Menu
            </button>
            {isOpen && (
                <ul className="mt-2 border bg-white p-2 rounded-md">
                    <li className="p-1">King Burger</li>
                    <li className="p-1">Chicken Burger</li>
                    <li className="p-1">Veggie Burger</li>
                </ul>
            )}
        </div>
    );
};
export default Menu;