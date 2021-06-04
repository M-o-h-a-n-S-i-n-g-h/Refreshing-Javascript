import React from "react";

class ComponentWillUnmount extends React.Component {
   constructor(props) {
      super(props);
      this.listener = this.listener.bind(this);
   }
   
   listener() {
      window.addEventListener("resize", () => console.log(window.innerHeight));
   }
   
   componentDidMount() {
      this.listener();
   }
   
   componentWillUnmount() {
      window.removeEventListener("resize", this.listener);
   }
}

export default ComponentWillUnmount;