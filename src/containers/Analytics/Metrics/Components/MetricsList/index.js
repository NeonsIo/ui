import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchListData } from '../../../../../actions/Analytics/metrics';
import MetricsList from './MetricsList';

const mapStateToProps = state => ({
  listData: state.metrics.listData,
  listDataLoaded: state.metrics.listDataLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchListData: bindActionCreators(fetchListData, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MetricsList);
