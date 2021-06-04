import React from "react";

class ConditionalRendering extends React.Component {
   render() {
      const {isLoggedIn} = this.props;
      if (isLoggedIn) {
         return <h1 className="App">I'm Logged In</h1>
      } else {
         return <h1 className="App">I'm Not Logged in</h1>
      }
   }
}

export default ConditionalRendering;