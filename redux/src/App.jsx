import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import './App.css'
import { incremented, decremented } from "./actions/counter.action";

const App = () => {
   const dispatch = useDispatch();
   const counter = useSelector(state => state.counter);
   
   return (
     <div className="App">
        <h1>Counter Application</h1>
        <h3>Current Count is {counter}</h3>
        <button onClick={() => dispatch(incremented(counter))}>Increment</button>
        <button onClick={() => dispatch(decremented(counter))}>Decrement</button>
     </div>
   )
}

export default App