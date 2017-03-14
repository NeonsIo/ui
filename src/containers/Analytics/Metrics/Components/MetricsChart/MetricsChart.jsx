import React from 'react';
import Chart from '../../../../../components/Chart/Chart';
import './MetricsChart.css';

class MetricsChart extends React.Component {
  constructor(props) {
    super(props);

    this.wrapper = {};
    this.margin = { top: 35, right: 80, bottom: 40, left: 60 };

    this.state = {
      width: 0,
      height: 0,
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentWillMount() {
    this.props.fetchChartDataAction(this.props.segment);
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
    const { chartData, chartDataLoaded } = this.props;

    return (
      <div className="MetricsChart" ref={(node) => { this.wrapper = node; }} >
        { chartDataLoaded ? (
          <Chart
            margin={this.margin}
            data={chartData}
            width={this.state.width}
            height={this.state.height}
            xProperty="day"
            yProperty="amount"
            noun="visits"
          />
        ) : null
        }
      </div>
    );
  }
}

MetricsChart.defaultProps = {
  chartData: [],
  chartDataLoaded: false,
  fetchChartDataAction: () => {},
  segment: null,
};

MetricsChart.propTypes = {
  chartData: React.PropTypes.arrayOf(React.PropTypes.object),
  chartDataLoaded: React.PropTypes.bool,
  fetchChartDataAction: React.PropTypes.func,
  segment: React.PropTypes.string,
};

export default MetricsChart;
