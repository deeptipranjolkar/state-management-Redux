import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import {CounterContext} from './Context/CounterContext';


function App() {
  let [counter,setCounter] = useState(0)
  return (
   <>
   <CounterContext.Provider value={{counter,setCounter}}>
   <Counter counter = {counter} setCounter={setCounter}/>
   </CounterContext.Provider>
   </>
  );
}

export default App;
