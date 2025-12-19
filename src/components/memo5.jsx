/* .Implement a component that shows live time updates but prevents unnecessary 
re-renders of static UI parts. */
import React, { useState, useEffect } from 'react';

const StaticPart = React.memo(() => {
    console.log('Rendering StaticPart');
    return <div>This part does not change.</div>;
});
export default function LiveTimeWithStaticPart() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className='p-4 rounded shadow-md'>
            <h2>Live Time Update</h2>
            <StaticPart />
            <p>Current Time: {currentTime}</p>
        </div>
    );
}
