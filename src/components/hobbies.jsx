import React from 'react';
const Hobby = ({ name, description }) => {
    return (
        <div className="p-4 rounded shadow-md">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};
const HobbiesList = () => {
    const hobbies = [
        { name: 'Photography', description: 'Capturing moments through the lens.' },
        { name: 'Gardening', description: 'Growing plants and flowers.' },
        { name: 'Cooking', description: 'Creating delicious meals and experimenting with recipes.' },
    ];
    return (
        <div className="p-4 rounded shadow-md">
            <h2>My Hobbies</h2>
            {hobbies.map((hobby, index) => (
                <Hobby key={index} name={hobby.name} description={hobby.description} />
            ))}
        </div>
    );
};
export default HobbiesList;