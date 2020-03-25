import React, { useReducer } from 'react';

const initialState = {
    firstCount: 0,
    secondCount: 0
}
const reducer = (currentState, action)=>{
  switch(action.type){
      case 'increment':
          return {...currentState, firstCount: currentState.firstCount + action.value};
     case 'decrement':
         return {...currentState,firstCount: currentState.firstCount - action.value};
         case 'increment2':
          return {...currentState, secondCount: currentState.secondCount + action.value};
     case 'decrement2':
         return {...currentState, secondCount: currentState.secondCount - action.value};
    case 'reset':
         return {...currentState,firstCount: initialState.firstCount};
        default:
            return {
                ...currentState,
                firstCount: currentState.firstCount,
                secondCount: currentState.secondCount
            };
  }
}
function HooksuseReducerCounterTwo(props) {
   const [count, dispatch]  = useReducer(reducer, initialState);

    return (
        <div>
            <div> count - {count.firstCount}</div>
            <div> Count2 - {count.secondCount}</div>
            <button onClick = {()=>dispatch({type:'increment2', value: 1})}>Increment2</button>
            <button onClick = {()=>dispatch({type:'decrement2', value: 1})}>Decrement2</button>
            <br/> <button onClick = {()=>dispatch({type:'increment', value: 1})}>Increment</button>
            <button onClick = {()=>dispatch({type:'decrement', value: 1})}>Decrement</button>
          
           
            <button onClick = {()=>dispatch({type:'increment', value: 10})}>Increment by 10</button>
            <button onClick = {()=>dispatch({type:'decrement', value: 5})}>Decrement by 5</button>
            <button onClick = {()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    );
}

export default HooksuseReducerCounterTwo;