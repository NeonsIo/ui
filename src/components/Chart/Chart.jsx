import * as d3 from 'd3';
import React from 'react';
import Axis from './components/Axis/Axis';
import Grid from './components/Grid/Grid';
import Dots from './components/Dots/Dots';
import Tooltip from './components/Tooltip/Tooltip';
import './Chart.css';

const HOVERED_DOT_COLOR = '#c0c0c0';
const STANDARD_DOT_COLOR = '#33312e';

class Chart extends React.Component {
  constructor(props, state) {
    super(props, state);

    this.actualHeight = props.height - props.margin.top - props.margin.bottom;
    this.actualWidth = props.width - props.margin.left - props.margin.right;

    this.state = {
      tooltip: {
        display: false,
        data: { key: '', value: '' },
      },
    };

    this.showToolTip = this.showToolTip.bind(this);
    this.hideToolTip = this.hideToolTip.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.width !== this.props.width || nextProps.height !== this.props.height) {
      this.actualHeight = nextProps.height - nextProps.margin.top - nextProps.margin.bottom;
      this.actualWidth = nextProps.width - nextProps.margin.left - nextProps.margin.right;
    }
  }

  showToolTip(event) {
    event.target.setAttribute('fill', HOVERED_DOT_COLOR);

    this.setState({
      tooltip: {
        display: true,
        data: {
          key: event.target.getAttribute('data-key'),
          value: event.target.getAttribute('data-value'),
        },
        pos: {
          x: event.target.getAttribute('cx'),
          y: event.target.getAttribute('cy'),
        },
      },
    });
  }

  hideToolTip(event) {
    event.target.setAttribute('fill', STANDARD_DOT_COLOR);
    this.setState({
      tooltip: {
        display: false,
        data: { key: '', value: '' },
      },
    });
  }

  render() {
    const { width, height, data, margin, xProperty, yProperty, noun } = this.props;
    const yPropertyExtent = d3.extent(data, element => element[yProperty]);
    const yPropertyMax = d3.max(data, element => element[yProperty]);
    const isMinEqualsMax = yPropertyExtent[0] === yPropertyExtent[1];

    const strokeLine = isMinEqualsMax ? '#ffb500' : 'url(#grd)';

    const yDomain = isMinEqualsMax ? [0, yPropertyMax] : yPropertyExtent;
    const xDomain = d3.extent(data, element => element[xProperty]);

    const xScale = d3.scaleTime()
      .domain(xDomain)
      .range([0, this.actualWidth]);

    const yScale = d3.scaleLinear()
      .domain(yDomain)
      .range([this.actualHeight, 0]);

    const yAxis = d3.axisLeft(yScale)
      .ticks(5);

    const xAxis = d3.axisBottom(xScale)
     .ticks(4);

    const yGrid = d3.axisLeft(yScale)
      .ticks(5)
      .tickSize(-this.actualWidth, 0, 0)
      .tickFormat('');

    const line = d3.line()
      .x(d => xScale(d[xProperty]))
      .y(d => yScale(d[yProperty]));
      // .curve(d3.curveCatmullRom.alpha(0.5));

    return (
      <div className="Chart">
        <svg width={width} height={height}>
          <defs>
            <linearGradient id="grd" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="5%" stopColor="#ffb500" />
              <stop offset="95%" stopColor="#ffd532" />
            </linearGradient>
          </defs>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <Grid h={this.actualHeight} grid={yGrid} gridType="y" />
            <Axis h={this.actualHeight} axis={yAxis} axisType="y" />
            <Axis h={this.actualHeight} axis={xAxis} axisType="x" />
            <path
              stroke={strokeLine}
              className="line shadow"
              d={line(data)}
              strokeLinecap="round"
            />
            <Dots
              data={data}
              formatKey={d3.timeFormat('%b %e')}
              x={xScale}
              y={yScale}
              showToolTip={this.showToolTip}
              hideToolTip={this.hideToolTip}
              xProperty={xProperty}
              yProperty={yProperty}
            />
            <Tooltip tooltip={this.state.tooltip} noun={noun} />
          </g>
        </svg>
      </div>
    );
  }
}

Chart.defaultProps = {
  data: [],
  height: 0,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  noun: 'elements',
  width: 0,
  yProperty: '',
  xProperty: '',
};

Chart.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
  height: React.PropTypes.number,
  margin: React.PropTypes.shape({
    top: React.PropTypes.number,
    right: React.PropTypes.number,
    bottom: React.PropTypes.number,
    left: React.PropTypes.number,
  }),
  noun: React.PropTypes.string,
  width: React.PropTypes.number,
  yProperty: React.PropTypes.string,
  xProperty: React.PropTypes.string,
};

export default Chart;
