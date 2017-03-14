import React from 'react';
import Metrics from '../../../Analytics/Metrics';
import Soon from '../../../TagManager/Soon';
import { ANALYTICS, TAG_MANAGER } from '../../../../constants/products';

const ContentProvider = ({ product, website }) => {
  switch (product) {
    case ANALYTICS:
      return (
        <Metrics website={website} />
      );
    case TAG_MANAGER:
      return (
        <Soon />
      );
    default:
      return (
        <Metrics website={website} />
      );
  }
};

ContentProvider.defaultProps = {
  product: null,
  website: null,
};

ContentProvider.propTypes = {
  product: React.PropTypes.string,
  website: React.PropTypes.string,
};

export default ContentProvider;
