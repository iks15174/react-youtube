import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Value extends Component {
    render() {
        return (
            <div>
                {this.props.number}
            </div>
        )
    }
}

Value.propTypes = {
    number: PropTypes.number
}

Value.defaultProps = {
    number: -1
}
