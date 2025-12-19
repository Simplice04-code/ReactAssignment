import React from 'react';
const CurrentDate = () => {
    const today = new Date();
    return (
        <div className = "p-4  rounded shadow-md">
            <h2 className='text-2xl text-black font-bold'>Welcome to Our React Assignment!</h2>
            <p>Today's Date: {today.toDateString()}</p>
        </div>
    );
};
export default CurrentDate;