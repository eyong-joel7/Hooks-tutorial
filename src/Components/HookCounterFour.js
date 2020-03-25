import React, {useState} from 'react';

function HookCounterFour(props) {
    const [items, setItems] = useState([])
    const addNumber = ()=>{
        setItems([...items, {
            id: items.length,
            value: Math.round(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick = {addNumber}>Add a Number</button>
            <ul>
                {
                  items.map(item=> { return <li key={item.id}>{item.id} - {item.value}</li>} )
                }
            </ul>
            
        </div>
    );
}

export default HookCounterFour;