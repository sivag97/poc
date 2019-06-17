import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      degree: 0,
      isCelsiusSelected: true,
      convertedTemperature: ""
    };
  }
  temperatureChange = e => {
    this.setState({
      degree: e.target.value
    });
  };

  handleCelsius = () => {
    this.setState({
      isCelsiusSelected: true
    });
  };

  handleFarenheit = () => {
    this.setState({
      isCelsiusSelected: false
    });
  };

  handleSubmit = () => {
    const { isCelsiusSelected } = this.state;
    if (isCelsiusSelected) {
      this.setState(prevState => ({
        convertedTemperature: ((prevState.degree - 32) * 5) / 9
      }));
    } else {
      this.setState(prevState => ({
        convertedTemperature: (prevState.degree * 9) / 5 + 32
      }));
    }
  };
  handleReset = () => {
    this.setState({
      degree: 0,
      isCelsiusSelected: true,
      convertedTemperature: "please ENTER the degree"
    });
  };

  render() {
    return (
      <div>
        <input
          placeholder="enter degree"
          name="degree"
          value={this.state.degree}
          type="text"
          onChange={this.temperatureChange}
        />
        <br />
        <label>
          <input
            checked={this.state.isCelsiusSelected}
            type="radio"
            onChange={this.handleCelsius}
          />
          CELSIUS
        </label>
        <br />
        <label>
          <input
            checked={!this.state.isCelsiusSelected}
            type="radio"
            onChange={this.handleFarenheit}
          />
          FARENHEIT
        </label>
        <br />
        <button onClick={this.handleSubmit}>ConVerT</button>
        <button onClick={this.handleReset}>reset</button>
        <div>{}</div>
        <h1>{this.state.convertedTemperature}</h1>
      </div>
    );
  }
}

export default App;
