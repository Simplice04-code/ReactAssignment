/* Create a "heavy calculation" component that uses React.memo to optimize 
performance. */
import React, { useState, useMemo } from 'react';

const heavyCalculation = (num) => {
    console.log('Performing heavy calculation...');
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
        result += num;
    }
    return result;
};

const HeavyCalculationComponent = React.memo(({ number }) => {
    const calculatedValue = useMemo(() => heavyCalculation(number), [number]);
    return (
        <div>
            <p>Calculated Value: {calculatedValue}</p>
        </div>
    );
});
export default function MemoizedHeavyCalculation() {
    const [number, setNumber] = useState(1);
    const [dummyState, setDummyState] = useState(false);
    return (
        <div className='p-4 rounded shadow-md'>
            <h2>Heavy Calculation with Memoization</h2> 
            <input
                type="number"
                value={number}  
                onChange={(e) => setNumber(parseInt(e.target.value))}
                className="border p-2 rounded-md px-5 mt-2"
            />  
            <HeavyCalculationComponent number={number} />
            <button 
                className="border bg-gray-400 p-2 rounded-md px-5 mt-2"
                onClick={() => setDummyState(!dummyState)}
            >
                Re-render Parent
            </button>
        </div>
    );
}
