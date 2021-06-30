import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import './App.css'
import { incremented, decremented } from "./actions/counter.action";
import { getUsersAction } from "./actions/users.action";

const App = () => {
   const dispatch = useDispatch();
   const counter = useSelector(state => state.counter);
   const {users} = useSelector((state => state.user));
   
   return (
     <div className="App">
        <h1>Counter Application</h1>
        <h2 style={{color: "blue"}}>Current Count is {counter}</h2>
        <h1>User Length: {users.length}</h1>
        <button onClick={() => dispatch(incremented())}>Increment</button>
        <button onClick={() => dispatch(decremented())}>Decrement</button>
        <button onClick={() => dispatch(getUsersAction())}>Get Users</button>
        {
           users && users.map((user) => <pre>{user.title}</pre>)
        }
     </div>
   )
}

export default App