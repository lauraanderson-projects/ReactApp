import { Component } from "react";

class ClassBasedComponent extends Component {
  //state
  state = {
    showText: false,
    changeColor: false,
    count: 0,
    changeCountStyle: false,
  };

  handleClick = () => {
    console.log("Button clicked");

    const { showText, changeColor } = this.state;

    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };

  handleCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };

  //componentDidMount
  componentDidMount() {
    console.log("first time on page load");

    this.setState({
      changeColor: !this.state.changeColor,
      showText: !this.state.showText,
    });
  }
  //componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);
    if (
      prevState &&
      prevState.count !== this.state.count &&
      this.state.count === 10
    ) {
      this.setState({
        ...this.state,
        changeCountStyle: true,
      });
    }
  }

  //componentWillUnmount
  componentWillUnmount() {
    console.log("component will unmount");
  }

  //constructor(props) {
  //  super(props);
  //  this.state = {
  //    showText: false,
  //  };
  //}
  render() {
    const { showText, changeColor, count, changeCountStyle } = this.state;
    console.log(changeCountStyle);
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
        <button onClick={this.handleCount}>Increase Count Value</button>
        <p style={{ color: changeCountStyle ? "red" : "black" }}>
          Count Value: {count}
        </p>
      </div>
    );
  }
}

export default ClassBasedComponent;
