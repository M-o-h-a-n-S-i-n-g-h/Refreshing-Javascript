import React from "react";

class Counter extends React.Component {
   render() {
      return (
        <>
           <h1>Count: {this.props.count}</h1>
           <button onClick={this.props.increment}>Increment</button>
           <button onClick={this.props.decrement}>Decrement</button>
        </>
      )
   }
}

export default Counter;