import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import HookCounter from './Components/HookCounter'
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';
import HookEffectCounter from './HookEffectCounter';
import ClassMouse from './ClassMouse';
import HookMouse from './HookMouse';
import MouseContainer from './MouseContainer'
import IntervalClassCounter from './Components/IntervalClassCounter';
import IntervalHookCounter from './Components/IntervalHookCounter';
import HookDataFetching from './Components/HookDataFetching';
import ComponentC from './ContextHooks/ComponentC';
import HooksuseReducerCounter from './HooksuseReducerCounter';
import HooksuseReducerCounterTwo from './HooksuseReducerCountertwo';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <HooksuseReducerCounterTwo/>
          {/* <HookDataFetching/> */}
          {/* <ChannelContext.Provider value={'GIFTED HANDS'}>
             <UserContext.Provider value = {'JOEL'}>
             <ComponentC/>
             </UserContext.Provider>
          
          </ChannelContext.Provider> */}
          
          
            {/* <IntervalHookCounter/> */}
        {/* <MouseContainer/> */}
        {/* <IntervalClassCounter/> */}
        {/* <HookMouse/> */}
        {/* <ClassMouse/>  */}
        {/* <HookEffectCounter/> */}
        {/* <HookCounterTwo/> */}
        {/* <HookCounterFour/> */}
        {/* <HookCounterThree/> */}
        {/* <Counter /> */}
      </header>
    </div>
  );
}

export default App;
