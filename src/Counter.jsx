import React from 'react'
import { useContext } from 'react'
import { CounterContext } from './Context/CounterContext'


function Counter() { 
// function Counter({counter,setCounter}) { 
// function Counter({counter,setCounter}) { or
    // function Counter(props) {
        let {counter,setCounter} = useContext(CounterContext)
        const increment = ()=>{
            setCounter(++counter)
        }
        const decrement =()=>{
            setCounter(--counter)
        }

  return (
    <>
    <div>{counter}</div>
    {/* <div>{props.counter}</div> */}
    {/* /<div>{counter}</div> this id when we write // function Counter({counter,setCounter}) { thhis above}*/}
    <button onClick={increment}>Increment</button> 
    <button onClick={decrement}>Decrement</button>
    
    </>
  )
}

export default Counter