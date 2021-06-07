import React, { useState } from "react";

// Error Handler Component - CustomComponent
const ErrorComponent = () => {
   return <h2>Either one of it is not a type of number, So can't add it</h2>;
}

const ErrorHandler = () => {
   const [number1, setNumber1] = useState("");
   const [number2, setNumber2] = useState("");
   const [result, setResult] = useState(0);
   const [error, setError] = useState(false);
   
   const validateNumbers = (num1, num2) => {
      if (isNaN(num1) || isNaN(num2)) {
         setError(true);
      } else {
         setResult(Number(num1) + Number(num2));
      }
   }
   
   const onSubmit = (event) => {
      event.preventDefault();
      validateNumbers(number1, number2);
   }
   
   const clearInput = () => {
      setNumber1("");
      setNumber2("");
      setResult(0);
      console.log("Cleared");
      console.log(number1);
   }
   
   return (
     <div className="App">
        <h1>If you enter strings instead of numbers the error message will show up after you press
           submit button
        </h1>
        {!error && (
          <form onSubmit={onSubmit}>
             <label htmlFor="number1">First Number</label>
             <input type="text" name="number1" onChange={e => setNumber1(e.target.value)}
                    value={number1}/>
             <label htmlFor="number2">Second Number</label>
             <input type="text" name="number2" onChange={e => setNumber2(e.target.value)}
                    value={number2}/>
             <input type="submit"/>
             <input type="button" onClick={clearInput} value="Clear"/>
             <h3>Result is: {result}</h3>
          </form>
        )}
        {error && <ErrorComponent/>}
     </div>
   )
}

export default ErrorHandler;