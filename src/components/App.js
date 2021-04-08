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
    this.arrowRightKey = this.arrowRightKey.bind(this);
  }

  buttonClickHandler() {
    this.setState({renderBall:true})
    
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

  arrowRightKey(event){
    console.log("run")
    if(event.keyCode === 39){
      if(this.state.renderBall){
        const newPosition = this.state.posi + 5;
        this.setState({
          posi : newPosition,
           ballPosition: { left: newPosition +"px" }

        })
      }
    }
   
  }

  
  // bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener( "keydown",this.arrowRightKey)
    
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
