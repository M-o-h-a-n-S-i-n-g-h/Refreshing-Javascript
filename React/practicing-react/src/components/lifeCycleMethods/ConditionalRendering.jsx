import React from "react";

class ConditionalRendering extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoggedIn: true,
      }
   }
   
   handleClick = () => {
      if (this.state.isLoggedIn) {
         this.setState({
            isLoggedIn: false
         })
      } else {
         this.setState({
            isLoggedIn: true,
         })
      }
      
   }
   
   render() {
      const {isLoggedIn} = this.state;
      return (
        <div className="App">
           <h2>Conditional Rendering Component</h2>
           {
              isLoggedIn ? <h1 className="App">Logged in</h1> : <h1 className="App">Not Logged In
              </h1>
           }
           <button onClick={this.handleClick}>
              {
                 isLoggedIn ? "Logout" : "Login"
              }
           </button>
        </div>
      )
   }
}

export default ConditionalRendering;