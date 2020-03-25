import React, { useState, useEffect } from 'react';

function HookEffectCounter(props) {
    
    const [count, setCount] = useState(0);
    const [name, setName] = useState("")
    useEffect(() =>{
        document.title = `You clicked ${count} times`;
        console.log(`Updating document title`);
    }, [count])
    return (
        <div>
            <input type="text" value = {name} placeholder ="type name" onChange = {(e) =>setName(e.target.value)}/>
            <br/>
            <button onClick = {()=> setCount(count + 1)}> You Clicked {count} times</button>
        </div>
    );
}

export default HookEffectCounter;