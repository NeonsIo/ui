import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchChartData } from '../../../../../actions/Analytics/metrics';
import MetricsChart from './MetricsChart';

const mapStateToProps = state => ({
  chartData: state.metrics.chartData,
  chartDataLoaded: state.metrics.chartDataLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchChartData: bindActionCreators(fetchChartData, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MetricsChart);
