import React, { PropTypes } from 'react';
import './Label.css';

const Label = ({ htmlFor, text }) => (
  <label htmlFor={htmlFor} className="Label">{text}</label>
);

Label.defaultProps = {
  htmlFor: '',
  text: '',
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Label;
