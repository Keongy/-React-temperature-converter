import React from 'react';
import TemperatureInput from './TemperatureInput';
import WaterBoilOrNot from './WaterBoilOrNot';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      temperature: "99",
      celsius: "",
      fahrenheit: ""
    }
    this.handleTemperatureChangeCelsius = this.handleTemperatureChangeCelsius.bind(this)
    this.handleTemperatureChangeFahrenheit = this.handleTemperatureChangeFahrenheit.bind(this)
  }

  handleTemperatureChangeCelsius(celsius) {
    this.setState({ celsius })
  }

  handleTemperatureChangeFahrenheit(fahrenheit) {
    this.setState({ fahrenheit })
  }

  render() {
    const temperature = this.state.temperature
    return (
      <div className="App">
        <div className="row justify-content-center m-0 mt-5">
          <div className="col-3 border">
            {JSON.stringify(this.state)}
            <TemperatureInput temperature={this.handleTemperatureChangeCelsius} scale="Celsius" />
            <TemperatureInput temperature={this.handleTemperatureChangeFahrenheit} scale="Fahrenheit" />
            <WaterBoilOrNot temperature={temperature} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
