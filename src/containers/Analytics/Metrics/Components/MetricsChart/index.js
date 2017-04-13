import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchChartDataAction } from '../../../../../actions/Analytics/metrics';
import MetricsChart from './MetricsChart';

const mapStateToProps = state => ({
  chartData: state.metrics.chartData,
  chartDataLoaded: state.metrics.chartDataLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchChartDataAction: bindActionCreators(fetchChartDataAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MetricsChart);
