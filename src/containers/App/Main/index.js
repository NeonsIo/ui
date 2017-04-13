import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWebsitesAction, fetchProductsAction } from '../../../actions/App/main';
import Main from './Main';

const mapStateToProps = state => ({
  products: state.main.products,
  productsLoaded: state.main.productsLoaded,
  websites: state.main.websites,
  websitesLoaded: state.main.websitesLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchProductsAction: bindActionCreators(fetchProductsAction, dispatch),
  fetchWebsitesAction: bindActionCreators(fetchWebsitesAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
