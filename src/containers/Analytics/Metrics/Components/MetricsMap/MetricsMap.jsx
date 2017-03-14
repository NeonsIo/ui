import React from 'react';
import Globe from '../../../../../components/Globe/Globe';
import './MetricsMap.css';

class MetricsMap extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = {};

    this.state = {
      width: 0,
      height: 0,
    };

    this.margin = { top: 35, right: 0, bottom: 40, left: 0 };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions, false);
  }

  updateDimensions() {
    this.setState({ width: this.wrapper.offsetWidth, height: this.wrapper.offsetHeight });
  }

  render() {
    return (
      <div className="MetricsMap" ref={(node) => { this.wrapper = node; }}>
        <Globe margin={this.margin} width={this.state.width} height={this.state.height} />
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
