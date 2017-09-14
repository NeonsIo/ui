import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import ContentProvider from './providers/ContentProvider';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: 'analytics',
      website: '123432-423423-42342-32',
    };

    this.setProduct = this.setProduct.bind(this);
    this.setWebsite = this.setWebsite.bind(this);
  }

  componentWillMount() {
    this.props.fetchProducts();
    this.props.fetchWebsites();
  }

  setProduct(product) {
    this.setState({
      ...this.state,
      product: product.value,
    });
  }

  setWebsite(website) {
    this.setState({
      ...this.state,
      website: website.value,
    });
  }

  shouldRender() {
    const { productsLoaded, websitesLoaded } = this.props;

    return productsLoaded && websitesLoaded;
  }

  render() {
    const { products, websites } = this.props;
    const { product, website } = this.state;

    return this.shouldRender() ? (
      <div className="Main">
        <Navbar
          product={product}
          products={products}
          setProduct={this.setProduct}
          website={website}
          websites={websites}
          setWebsite={this.setWebsite}
        />
        <ContentProvider product={product} website={website} />
        <Footer />
      </div>
    ) : null;
  }
}

Main.defaultProps = {
  products: [],
  productsLoaded: false,
  websites: [],
  websitesLoaded: false,
  fetchProducts: () => {},
  fetchWebsites: () => {},
};

Main.propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.object),
  websites: React.PropTypes.arrayOf(React.PropTypes.object),
  productsLoaded: React.PropTypes.bool,
  websitesLoaded: React.PropTypes.bool,
  fetchProducts: React.PropTypes.func,
  fetchWebsites: React.PropTypes.func,
};

export default Main;
