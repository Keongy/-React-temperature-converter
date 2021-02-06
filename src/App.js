import React from 'react';
import TemperatureInput from './TemperatureInput';
import WaterBoilOrNot from './WaterBoilOrNot';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      celsius: "",
      fahrenheit: ""
    }
    this.handleTemperatureChangeCelsius = this.handleTemperatureChangeCelsius.bind(this)
    this.handleTemperatureChangeFahrenheit = this.handleTemperatureChangeFahrenheit.bind(this)
    this.convertCelsiusToFahrenheit = this.convertCelsiusToFahrenheit.bind(this)
  }

  convertCelsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32
    this.setState({ fahrenheit })
  }

  convertFahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9
    this.setState({ celsius })
  }

  handleTemperatureChangeCelsius(celsius) {
    this.setState({ celsius })
    this.convertCelsiusToFahrenheit(celsius)
  }

  handleTemperatureChangeFahrenheit(fahrenheit) {
    this.setState({ fahrenheit })
    this.convertFahrenheitToCelsius(fahrenheit)
  }

  render() {
    const celsius = this.state.celsius
    const fahrenheit = this.state.fahrenheit
    return (
      <div className="App">
        <div className="row justify-content-center m-0 mt-5">
          <div className="col-3 jumbotron pt-3 pb-4">
            <h2 className="mb-5 text-center">Convertisseur</h2>
            <TemperatureInput value={celsius} temperature={this.handleTemperatureChangeCelsius} scale="Celsius" />
            <TemperatureInput value={fahrenheit} temperature={this.handleTemperatureChangeFahrenheit} scale="Fahrenheit" />
            <WaterBoilOrNot temperature={celsius} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
