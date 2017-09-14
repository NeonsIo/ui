import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWebsites, fetchProducts } from '../../../actions/App/main';
import Main from './Main';

const mapStateToProps = state => ({
  products: state.main.products,
  productsLoaded: state.main.productsLoaded,
  websites: state.main.websites,
  websitesLoaded: state.main.websitesLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: bindActionCreators(fetchProducts, dispatch),
  fetchWebsites: bindActionCreators(fetchWebsites, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
