import React from "react";

class DidMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "No name",
    };
    this.getName = this.getName.bind(this);
  }

  getName() {
    return "Mohan Singh";
  }

  componentDidMount() {
    this.setState({
      name: this.getName(),
    });
  }

  render() {
    return (
      <div className="App">
        <h1>I'm From {this.props.title}</h1>
        <h2>I'm {this.state.name} I loaded from "ComponentDidMount" Method</h2>
      </div>
    );
  }
}

export default DidMount;
