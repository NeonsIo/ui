import React, { PropTypes } from 'react';
import './Story.css';

const Story = ({ children }) => (
  <div className="Story">{children}</div>
);

Story.defaultProps = {
  children: [],
};

Story.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Story;
