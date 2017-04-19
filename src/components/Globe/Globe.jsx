import * as d3 from 'd3';
import * as topojson from 'topojson';
import React from 'react';
import './Globe.css';

class Globe extends React.Component {
  constructor(props, state) {
    super(props, state);

    this.continents = [{
      name: 'World',
      scale: 170,
      margin: 0,
    }, {
      name: 'Africa',
      scale: 170,
      margin: 0,
    }, {
      name: 'Asia',
      scale: 170,
      margin: 0,
    }, {
      name: 'Australia',
      scale: 170,
      margin: 0,
    }, {
      name: 'Europe',
      scale: 170,
      margin: 0,
    }, {
      name: 'North America',
      scale: 170,
      margin: 0,
    }, {
      name: 'South America',
      scale: 170,
      margin: 0,
    }];

    this.actualHeight = 0;
    this.actualWidth = 0;

    this.state = {
      continents: [],
    };

    this.projection = d3.geoEquirectangular().scale(180).rotate([356, 0, 0]);
    this.geoPath = d3.geoPath().projection(this.projection);
  }

  componentWillMount() {
    d3.json('world-continents.json', (error, world) => {
      this.setState({ ...this.state,
        continents: topojson.feature(world, world.objects.continent).features,
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.width !== this.props.width || nextProps.height !== this.props.height) {
      this.actualHeight = nextProps.height - nextProps.margin.top - nextProps.margin.bottom;
      this.actualWidth = nextProps.width - nextProps.margin.left - nextProps.margin.right;
    }
  }

  render() {
    const { continents } = this.state;

    return continents ? (
      <div className="Globe">
        <svg className="globe-svg" width={this.actualWidth} height={this.actualHeight}>
          <defs>
            <linearGradient id="fill-hover-color" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="5%" stopColor="#ffb500" />
              <stop offset="95%" stopColor="#ffd532" />
            </linearGradient>
          </defs>
          <g
            transform="translate(65, 35)"
            className="country"
            width={this.actualWidth}
            height={this.actualHeight}
          >
            {
              continents.map(c => (
                <path
                  d={this.geoPath(c)}
                  onMouseOver={(event) => {
                    event.target.setAttribute('fill', '#888585');
                    event.target.setAttribute('cursor', 'pointer');
                  }}
                  onMouseOut={(event) => {
                    event.target.setAttribute('fill', '#a2a0a0');
                    event.target.setAttribute('cursor', 'default');
                  }}
                />
              ))
            }
          </g>
        </svg>
      </div>
    ) : null;
  }
}

// <div>
//   <div className="legend">
//     <div className="selectMap">
//       {this.continents.map(continent => (
//         <div key={continent} className="selectMap--element">{continent.name}</div>
//       ))}
//     </div>
//     <div className="colors" />
//   </div>
// </div>

Globe.defaultProps = {
  height: 0,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  width: 0,
};

Globe.propTypes = {
  height: React.PropTypes.number,
  margin: React.PropTypes.shape({
    top: React.PropTypes.number,
    right: React.PropTypes.number,
    bottom: React.PropTypes.number,
    left: React.PropTypes.number,
  }),
  width: React.PropTypes.number,
};

export default Globe;
