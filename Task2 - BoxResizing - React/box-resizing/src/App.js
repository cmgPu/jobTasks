import React from "react";

class App extends React.Component {
  //I think that background-color should be green so we can actually see the changes
  // In instructions it says color.
  state = {
    width: 300,
    height: 300,
    divStyle: {
      whiteSpace: "nowrap",
      width: "300px",
      height: "300px",
      backgroundColor: "green",
      margin: "1rem",
      padding: "1rem"
    }
  };

  inputStyle = {
    marginLeft: "1rem",
    marginBottom: "1rem"
  };

  handleHeightChange = event => {
    event.persist();
    if (event.target.value > 500) event.target.value = 500;
    if (event.target.value < 0) event.target.value = 1;
    this.setState(oldState => {
      return {
        height: event.target.value,
        divStyle: {
          whiteSpace: "nowrap",
          width: oldState.divStyle.width,
          height: `${event.target.value}px`,
          backgroundColor: "green",
          margin: "1rem",
          padding: "1rem"
        }
      };
    });
  };

  handleWidthChange = event => {
    event.persist();
    if (event.target.value > 500) event.target.value = 500;
    if (event.target.value < 0) event.target.value = 1;
    this.setState(oldState => {
      return {
        width: event.target.value,
        divStyle: {
          whiteSpace: "nowrap",
          width: `${event.target.value}px`,
          height: oldState.divStyle.height,
          backgroundColor: "green",
          margin: "1rem",
          padding: "1rem"
        }
      };
    });
  };
  render() {
    return (
      <div style={this.state.divStyle}>
        Width:
        <input
          type="range"
          min="1"
          max="500"
          style={this.inputStyle}
          value={this.state.width}
          onChange={this.handleWidthChange}
          id="widthSlider"
        />
        <br />
        Height:
        <input
          type="range"
          min="1"
          max="500"
          style={this.inputStyle}
          value={this.state.height}
          onChange={this.handleHeightChange}
          id="heightSlider"
        />
        <br />
        Width:
        <input
          type="number"
          style={this.inputStyle}
          value={this.state.width}
          onChange={this.handleWidthChange}
          id="widthInput"
        />
        <br />
        Height:
        <input
          type="number"
          style={this.inputStyle}
          value={this.state.height}
          onChange={this.handleHeightChange}
          id="heightInput"
        />
      </div>
    );
  }
}

export default App;
