/* Design a profile card component that accepts name, age, and email as props. */

import React from 'react';

const Card = ({ name, age, email }) => {
    return (
        <div className="p-4 rounded shadow-md">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
};
export default Card;