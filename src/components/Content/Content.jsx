import React, { PropTypes } from 'react';
import './Content.css';

const Content = ({ children }) => (
  <div className="Content">{children}</div>
);

Content.defaultProps = {
  children: [],
};

Content.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Content;
