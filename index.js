import React, { Component } from "react";
import styled from "react-emotion";

const Card = styled.div({
  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container my-5">
        <Card className="row justify-content-center">
          <div className="col-lg-7">{this.props.children}</div>
        </Card>
      </div>
    );
  }
}

export default App;
