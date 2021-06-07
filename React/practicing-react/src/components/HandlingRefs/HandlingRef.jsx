import React from "react";

class HandlingRef extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: "",
      }
      this.textInput = React.createRef();
   }
   
   onSubmit = (event) => {
      event.preventDefault();
      this.setState({
         value: this.textInput.current.value
      })
   }
   
   render() {
      return (
        <div className="App">
           <form onSubmit={this.onSubmit}>
              <label htmlFor="value">Value</label>
              <input type="text" name="value" ref={this.textInput}/>
              <h3>The Value is: {this.state.value}</h3>
              <button type="submit">Submit</button>
           </form>
        </div>
      )
   }
   
}

export default HandlingRef;