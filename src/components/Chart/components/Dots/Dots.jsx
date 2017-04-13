import React from 'react';

const Dots = ({ x, y, data, showToolTip, hideToolTip, xProperty, yProperty, formatKey }) => {
  const circles = data.map(d => (
    <circle
      className="dot"
      r="4"
      cx={x(d[xProperty])}
      cy={y(d[yProperty])}
      fill="#33312e"
      stroke="#efefef"
      strokeWidth="2px"
      onMouseOver={showToolTip}
      onMouseOut={hideToolTip}
      data-key={formatKey(d.day)}
      data-value={d[yProperty]}
      key={`${d[xProperty]}.${d[yProperty]}`}
    />
  ));

  return (
    <g>
      {circles}
    </g>
  );
};

Dots.defaultProps = {
  data: [],
  formatKey: string => string,
  x: () => {},
  y: () => {},
  xProperty: '',
  yProperty: '',
  showToolTip: () => {},
  hideToolTip: () => {},
};

Dots.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
  formatKey: React.PropTypes.func,
  x: React.PropTypes.func,
  y: React.PropTypes.func,
  xProperty: React.PropTypes.string,
  yProperty: React.PropTypes.string,
  showToolTip: React.PropTypes.func,
  hideToolTip: React.PropTypes.func,
};

export default Dots;
