import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Control extends Component {

    constructor(props){
        super(props);

        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor(){
        const color = [
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200),
        ];
        this.props.onRandomizeColor(color);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.setRandomColor}>Randomize Color</button>
            </div>
        )
    }
}

Control.propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func,
}

function createWarning(funcName){
    return () => {console.log(funcName + " is not defined");}
}

Control.defaultProps = {
    onPlus: createWarning("onPlus"),
    onSubtract: createWarning("onSubtract"),
    onRandomizeColor: createWarning("onRandomizeColor")

}
