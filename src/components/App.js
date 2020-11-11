import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" },
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler() {
    this.setState({
      renderBall: true,
    });
  }
  renderBallOrButton() {
    if (this.state.renderBall) {
      return (
        <div
          className="ball"
          style={this.state.ballPosition}
          onKeyDown={this.keyClicked}
        ></div>
      );
    } else {
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
    }
  }
  keyClicked(e) {
    if (e.keyCode == 39) {
      let position = this.state.posi + 5;
      let ballPosition = {};
      ballPosition.left = position + "px";
      this.setState({
        posi: position,
        ballPosition: ballPosition,
      });
    }
  }
  // bind ArrowRight keydown event
  componentDidMount() {
    this.keyClicked = this.keyClicked.bind(this);
    window.addEventListener("keydown", this.keyClicked);
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
