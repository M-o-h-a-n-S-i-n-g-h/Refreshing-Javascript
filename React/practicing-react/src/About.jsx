import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const About = () => {
   const {value, setValue} = useContext(UserContext);
   
   return (
     <div className="App">
        <Link to="/">Home</Link>
        <h1>About Page</h1>
        <h3>{value}</h3>
        <button onClick={() => setValue("I have Changes")}>Click me to Change State</button>
        <Link to="/contact">
           Click me to see the same value in Contact Page
        </Link>
     </div>
   )
}

export default About;