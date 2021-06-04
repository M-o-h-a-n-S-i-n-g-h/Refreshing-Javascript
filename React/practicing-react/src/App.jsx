import React from "react";
import './App.css';
import DidMount from "./components/lifeCycleMethods/ComponentDidMount";
import DidUpdate from "./components/lifeCycleMethods/ComponentDidUpdate";
import ConditionalRendering from "./components/lifeCycleMethods/ConditionalRendering";

class App extends React.Component {
   render() {
      return (
        <>
           <h1 style={{fontSize: "3.5rem"}} className="App">This is The App Component</h1>
           <DidMount title="DidMount Component"/>
           <DidUpdate title="DidUpdate Component" name="Lee Chong Wei"/>
           <ConditionalRendering isLoggedIn={true}/>
        </>
      )
   }
}

export default App;