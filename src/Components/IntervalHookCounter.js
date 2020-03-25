import React, { useState, useEffect } from 'react';

function IntervalHookCounter(props) {
    const [count, setCounter] = useState(0);

       useEffect(()=> {
           console.log("Setting tinmer")
           const interval = setInterval(tick, 1000)
           return ()=>{
               clearInterval(interval)
           }
},[] 
// Using the second form of setCounter include count 
//as a dependency in the  - [count] .Note; always see the dependency array to 
//contain all variables the useEffect needs to watch
       ) 
    const tick = ()=>{
        setCounter(prevCount=> prevCount + 1)
        // // second method for seCounter  - use this  -  setCounter(count +1 );
       
    }
    
    
    return (
        <div>
            <h2>{count}</h2>
        </div>
    );
}

export default IntervalHookCounter;