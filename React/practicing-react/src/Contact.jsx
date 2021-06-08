import React, { useContext } from "react";
import { UserContext } from "./UserContext"
import { Link } from "react-router-dom";

const Contact = () => {
   const {value} = useContext(UserContext);
   
   return (
     <div className="App">
        <Link to="/">Home</Link>
        <h1>Contact Component</h1>
        <h3>{value}</h3>
        <Link to="/about">
           Click me to see the same value in About Page
        </Link>
     </div>
   )
}

export default Contact;