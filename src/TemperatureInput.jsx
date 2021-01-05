import React from 'react';

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.temperature(e.target.value)
    }

    render() {
        const { scale, value} = this.props
        return (
            <div className="form-group">
                <label htmlFor="">Température en {scale}</label>
                <input type="text" className="form-control" placeholder="Température..." onChange={this.handleChange} value={value} />
            </div>
        )
    }

}


export default TemperatureInput