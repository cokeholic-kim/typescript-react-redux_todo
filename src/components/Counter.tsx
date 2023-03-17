import React from 'react';

type CounterProps = {
    count:number;
    onIncrease:()=>void;
    onDecrease:()=>void;
}

const Counter = ({count,onIncrease,onDecrease}:CounterProps) => {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick = {onIncrease}>+</button>
            <button onClick = {onDecrease}>-</button>
        </div>
    );
};

export default Counter;