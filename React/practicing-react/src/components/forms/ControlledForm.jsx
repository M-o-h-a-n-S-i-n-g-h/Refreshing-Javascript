import React from "react";

class ControlledForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "",
         password: "",
      }
   }
   
   handleChange = (name, value) => {
      this.setState({
         [name]: value
      })
   }
   
   onSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.name, this.state.password);
   }
   
   render() {
      return (
        <div className="App">
           <h1>
              Controlled Form Component
           </h1>
           <form onSubmit={this.onSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name"
                     onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
              <label htmlFor="password" onChange={this.handleChange}>Password</label>
              <input type="password" name="password"
                     onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
              <button type="submit">Submit</button>
           </form>
        </div>
      )
   }
}

export default ControlledForm;