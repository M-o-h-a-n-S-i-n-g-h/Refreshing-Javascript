import React from "react";
import Counter from "./Counter";

class DisplayCounter extends React.Component {
   state = {
      count: 0,
   }
   
   increment = () => {
      this.setState({count: this.state.count + 1});
   }
   
   decrement = () => {
      this.setState({count: this.state.count - 1});
   }
   
   render() {
      return (
        <div className="App">
           <h1>Counters</h1>
           <Counter count={this.state.count} increment={this.increment} decrement={this.decrement}/>
           <Counter count={this.state.count} increment={this.increment} decrement={this.decrement}/>
        </div>
      )
   }
}

export default DisplayCounter;