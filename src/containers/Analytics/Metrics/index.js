import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSegments } from '../../../actions/Analytics/metrics';
import Metrics from './Metrics';

const mapStateToProps = state => ({
  segments: state.metrics.segments,
  segmentsLoaded: state.metrics.segmentsLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchSegments: bindActionCreators(fetchSegments, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Metrics);
