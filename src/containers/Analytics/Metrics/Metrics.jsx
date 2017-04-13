import React from 'react';
import MetricsBar from './Components/MetricsBar/MetricsBar';
import MetricsChart from './Components/MetricsChart';
import MetricsList from './Components/MetricsList';
import MetricsMap from './Components/MetricsMap/MetricsMap';
import './Metrics.css';

class Metrics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      segment: 'allVisits',
    };

    this.setSegment = this.setSegment.bind(this);
  }

  componentWillMount() {
    this.props.fetchSegmentsAction(this.props.website);
  }

  setSegment(item) {
    this.setState({
      segment: item.value,
    });
  }

  render() {
    const { segments, segmentsLoaded } = this.props;

    return segmentsLoaded ? (
      <div className="MetricsWrapper">
        <MetricsBar segment={this.state.segment} segments={segments} setSegment={this.setSegment} />
        <div className="Metrics">
          <MetricsList segment={this.state.segment} />
          <div className="Metrics--content-right">
            <MetricsChart segment={this.state.segment} />
            <MetricsMap />
          </div>
        </div>
      </div>
    ) : null;
  }
}

Metrics.defaultProps = {
  segments: [],
  website: null,
  segmentsLoaded: false,
  fetchSegmentsAction: () => {},
};

Metrics.propTypes = {
  website: React.PropTypes.string,
  segments: React.PropTypes.arrayOf(React.PropTypes.object),
  segmentsLoaded: React.PropTypes.bool,
  fetchSegmentsAction: React.PropTypes.func,
};

export default Metrics;
