import React, { PropTypes } from 'react';
import './Button.css';

const Button = ({ text, onClick, className }) => {
  const classes = `Button ${className}`;

  return <button className={classes} onClick={onClick}>{text}</button>;
};

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
