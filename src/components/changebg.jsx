/* Create a component that changes the background color of a div when hovered 
over. */
import React, { useState } from 'react';

const ChangeBg = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const divStyle = {
        backgroundColor: isHovered ? 'lightblue' : 'lightgray',
        padding: '20px',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    return (
        <div className='p-4 rounded shadow-md'>
            <div style={divStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                Hover over me!
            </div>
        </div>
    );
};
export default ChangeBg;