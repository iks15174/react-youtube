import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Control extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
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