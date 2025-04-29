import { Component } from "react";

class ClassBasedComponent extends Component {
  //state
  state = {
    showText: false,
    changeColor: false,
  };

  handleClick = () => {
    console.log("Button clicked");

    const { showText, changeColor } = this.state;

    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };

  //constructor(props) {
  //  super(props);
  //  this.state = {
  //    showText: false,
  //  };
  //}
  render() {
    console.log(this.state);

    const { showText, changeColor } = this.state;
    return (
      <div>
        {showText ? (
          <h3 style={{ color: changeColor ? "red" : "black" }}>
            Heading Three
          </h3>
        ) : (
          <h4>Heading Four</h4>
        )}
        <h3>Class based compnent</h3>
        <button onClick={this.handleClick}>Toggle Text</button>
      </div>
    );
  }
}

export default ClassBasedComponent;
