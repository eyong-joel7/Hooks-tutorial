import React, {useState} from 'react';

function HookCounterTwo(props) {
    const initialCount = 0;
    const [count, SetCount] = useState(initialCount)
   const incrementFive = ()=>{
        for(let i = 0; i <5; i++){
            SetCount(prevCount => prevCount + 1)
        }
        }
        const incrementCount = ()=>{
            SetCount(prevCount => prevCount+1)
        }
    return (
        <div>
            count: {count}
            <button onClick = {incrementCount}>Increment</button>
          
            <button onClick = {()=>SetCount(prevCount => prevCount - 1)}> Decrement</button>
            <button onClick = {()=>SetCount(0)}>Reset </button>
            <button onClick = {incrementFive}>Increment By 5</button>
        </div>
    );
}

export default HookCounterTwo;