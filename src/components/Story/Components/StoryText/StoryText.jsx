import React, { PropTypes } from 'react';
import './StoryText.css';

const StoryText = ({ text }) => (
  <div className="StoryText">{text}</div>
);

StoryText.defaultProps = {
  text: '',
};

StoryText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default StoryText;
