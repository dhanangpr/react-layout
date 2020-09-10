import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${props => props.primary ? "blue" : "white"};
  color: ${props => props.primary ? "white" : "blue"};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;

const Button = (props) => {
  return <StyledButton>{props.text}</StyledButton>
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;