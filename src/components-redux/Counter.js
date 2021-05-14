import React, { Component } from 'react';
import Value from "./Value";
import Control from "./Control";
import { connect } from "react-redux";

import * as actions from "../actions";

const mapStateToProps = (state) => {
    return {
        number : state.counter.number,
        color : state.ui.color
    };
}

const mapDispatchToProps = (dispatch) => {
    //return bindActionCreators(actions, dispatch);
    return {
        handleIncrement: () => { dispatch(actions.increment()) },
        handleDecrement: () => { dispatch(actions.decrement()) },
        handleSetColor: (color) => { dispatch(actions.setColor(color)) }
    }
}

class Counter extends Component {
    
    render() {
        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        }
        return (
            <div style={style}>
                <Value number={this.props.number}></Value>
                <Control
                onPlus={this.props.handleIncrement}
                onSubtract={this.props.handleDecrement}
                onRandomizeColor={this.props.handleSetColor}
                ></Control>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
