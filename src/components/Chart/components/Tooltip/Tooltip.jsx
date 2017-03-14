import React from 'react';

const Tooltip = ({ tooltip, noun }) => {
  const width = 100;
  const height = 40;
  const transformText = `translate(${width / 2}, ${(height / 2) - 5})`;
  let visibility = 'hidden';
  let transform = '';
  let x = 0;
  let y = 0;
  let transformArrow = '';

  if (tooltip.display === true) {
    const position = tooltip.pos;

    x = position.x;
    y = position.y;
    visibility = 'visible';

    if (y > height) {
      transform = `translate(${x - (width / 2)}, ${y - height - 20})`;
      transformArrow = `translate(${(width / 2) - 20},${height - 2})`;
    } else if (y < height) {
      transform = `translate(${x - (width / 2)}, ${Math.round(y) + 20})`;
      transformArrow = `translate(${(width / 2) - 20}, 0) rotate(180,20,0)`;
    }
  } else {
    visibility = 'hidden';
  }

  return (
    <g transform={transform}>
      <rect
        class="shadow"
        is
        width={width}
        height={height}
        rx="5"
        ry="5"
        visibility={visibility}
        fill="#6391da"
        opacity=".9"
      />
      <polygon
        class="shadow"
        is
        points="10,0  30,0  20,10"
        transform={transformArrow}
        fill="#6391da"
        opacity=".9"
        visibility={visibility}
      />
      <text is visibility={visibility} transform={transformText}>
        <tspan
          is
          x="0"
          text-anchor="middle"
          font-size="12px"
          fill="#ffffff"
        >{
          tooltip.data.key
        }</tspan>
        <tspan
          is
          x="0"
          text-anchor="middle"
          dy="15"
          font-size="12px"
          font-weight="bold"
          fill="#a9f3ff"
        >{
          `${tooltip.data.value} ${noun}`
        }</tspan>
      </text>
    </g>
  );
};

Tooltip.defaultProps = {
  tooltip: {},
  noun: 'elements',
};

Tooltip.propTypes = {
  tooltip: React.PropTypes.shape({
    data: React.PropTypes.object,
    display: React.PropTypes.bool,
    pos: React.PropTypes.object,
  }),
  noun: React.PropTypes.string,
};

export default Tooltip;
