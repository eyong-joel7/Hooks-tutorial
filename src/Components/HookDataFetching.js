import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function HookDataFetching(props) {
    const url = 'https://jsonplaceholder.typicode.com/posts'

    const [posts, setPost] = useState({});
    const [id, setId] = useState(0)
    const [btnId, setBtnId] = useState(1);

   const submitId = ()=>{
      setBtnId(id);
   }

    useEffect(() =>{
        if(id !==0 ){
        
            Axios.get(`${url}/${btnId}`)
        .then(response => {
             console.log(response)
             setPost(response.data)
        }
            
        )
        .catch(errr => console.log(errr)
        )
    }}, [btnId])
    return (
        <div>
           <input type="text" value ={id} onChange = {e=>setId(e.target.value)} ></input>
            <button onClick = {submitId}>Confirm</button>    
                <h3>{posts.id}:{posts.title}</h3>
              
        </div>
    );
}

export default HookDataFetching;