import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button className="btn btn-primary">{props.text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;