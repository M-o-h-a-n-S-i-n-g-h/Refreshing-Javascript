import React from "react";

class DidUpdate extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "Mohan",
      };
      
      this.getName = this.getName.bind(this);
      this.setName = this.setName.bind(this);
   }
   
   getName() {
      return this.state.name;
   }
   
   setName(name) {
      this.setState({
         name: name,
      });
   }
   
   componentDidMount() {
      this.getName();
      this.setName(this.state.name);
   }
   
   componentDidUpdate(prevProps) {
      if (this.state.name !== prevProps.name) {
         this.setName(this.props.name);
      }
   }
   
   render() {
      return (
        <div className="App">
           <h1>This is Component Did Update Component, I change if my props value changes</h1>
           <h1>{this.props.title}</h1>
           <h2>{this.state.name}</h2>
        </div>
      );
   }
}

export default DidUpdate;