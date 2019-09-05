import React, { Component } from 'react';
import './Button.css'
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return (
            <div className={"lcars-button" + " " + this.props.style}>{this.props.text}</div>
        );
    }
}

Button.propTypes = {
    style: PropTypes.string,
    text: PropTypes.string
};

export default Button;