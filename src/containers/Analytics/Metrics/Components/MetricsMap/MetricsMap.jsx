import React from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import { GeoJSON, Map } from 'react-leaflet';
import './MetricsMap.css';

class MetricsMap extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = {};

    this.state = {
      width: 0,
      height: 0,
      continents: [],
    };

    this.margin = { top: 35, right: 0, bottom: 40, left: 0 };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentWillMount() {
    d3.json('world-continents.json', (error, world) => {
      this.setState({ ...this.state,
        continents: topojson.feature(world, world.objects.continent).features,
      });
    });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions, false);
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions, false);
  }

  updateDimensions() {
    this.setState({
      ...this.state,
      width: this.wrapper.offsetWidth,
      height: this.wrapper.offsetHeight,
    });
  }

  render() {
    const style = {
      height: '70%',
    };

    return (
      <div className="MetricsMap" ref={(node) => { this.wrapper = node; }}>
        { this.state.continents.length ? (
          <Map center={[51.505, -0.09]} zoom={1} style={style}>
            <GeoJSON data={this.state.continents} />
          </Map>
        ) : null }
      </div>
    );
  }
}

MetricsMap.defaultProps = {
  fetchMapDataAction: () => {},
};

MetricsMap.propTypes = {
  fetchMapDataAction: React.PropTypes.func,
};

export default MetricsMap;
