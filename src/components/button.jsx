/* Create a reusable button component with customizable text and color props. */
import React from 'react';
const Button = ({ text, color }) => {
    const styles = {
        backgroundColor: color || 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    };
    return (
        <div className='p-4 rounded shadow-md'>
            <button style={styles} >{text}</button>
        </div>
        
        
    );

};
export default Button;