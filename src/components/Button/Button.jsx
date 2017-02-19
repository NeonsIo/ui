import React, { PropTypes } from 'react';
import './Button.css';

const Button = ({ value, onClick, className }) => {
  const classes = `Button ${className}`;

  return <button className={classes} onClick={onClick}>{value}</button>;
};

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
