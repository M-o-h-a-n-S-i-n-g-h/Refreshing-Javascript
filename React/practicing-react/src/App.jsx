import React from "react";
import './App.css';
import { UserContext } from "./UserContext";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DidMount from "./components/lifeCycleMethods/ComponentDidMount";
import DidUpdate from "./components/lifeCycleMethods/ComponentDidUpdate";
import ConditionalRendering from "./components/lifeCycleMethods/ConditionalRendering";
import ControlledForm from "./components/forms/ControlledForm";
import DisplayCounter from "./components/lifitngState/DisplayCounter";
import ErrorHandling from "./components/errorHandler/ErrorHandling";
import HandlingRef from "./components/HandlingRefs/HandlingRef";
import Router from "./components/Routing/Router";
import ApiHandler from "./components/apiHandling/ApiHandling";

const App = () => {
   const [value, setValue] = React.useState("Hello from Provider")
   return (
     <BrowserRouter>
        <h1 style={{fontSize: "3.5rem"}} className="App">This is The App Component</h1>
        <Switch>
           <Route exact path="/" component={Router}/>
           <Route exact path="/didMount" component={DidMount}/>
           <Route exact path="/didUpdate" component={DidUpdate}/>
           <Route exact path="/conditionRendering" component={ConditionalRendering}/>
           <Route exact path="/controlledForm" component={ControlledForm}/>
           <Route exact path="/liftState" component={DisplayCounter}/>
           <Route exact path="/errorHandling" component={ErrorHandling}/>
           <Route exact path="/handlingRef" component={HandlingRef}/>
           <Route exact path="/handlingRef" component={HandlingRef}/>
           <Route exact path="/posts" component={ApiHandler}/>
           <UserContext.Provider value={{value, setValue}}>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
           </UserContext.Provider>
        </Switch>
     </BrowserRouter>
   )
}

export default App;