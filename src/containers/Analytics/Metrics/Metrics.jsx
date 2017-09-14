import React from 'react';
import MetricsBar from './Components/MetricsBar/MetricsBar';
import MetricsChart from './Components/MetricsChart';
import MetricsList from './Components/MetricsList';
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
    this.props.fetchSegments(this.props.website);
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
  fetchSegments: () => {},
};

Metrics.propTypes = {
  website: React.PropTypes.string,
  segments: React.PropTypes.arrayOf(React.PropTypes.object),
  segmentsLoaded: React.PropTypes.bool,
  fetchSegments: React.PropTypes.func,
};

export default Metrics;
