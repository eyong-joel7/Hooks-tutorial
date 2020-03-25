import React, { useState } from 'react';

function HookCounterThree(props) {
    const [name, setName] = useState({firstName: '', lastName: ''})
    const changeName = e => {
         setName({...name, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <form>  
                <input type = "text" name = "firstName" value = {name.firstName} onChange ={changeName}/>
                <input type="text" name = "lastName" value = {name.lastName} onChange = {changeName}/>
                    <h2> Your first  - {name.firstName}</h2>
                    <h2>Your last name - {name.lastName} </h2>
                    <h3> {JSON.stringify(name)}</h3>
            </form>
        </div>
    );
}

export default HookCounterThree;