import React from 'react';
import Story from '../../../components/Story/Story';
import StoryDropdown from '../../../components/Story/Components/StoryDropdown/StoryDropdown';
import StoryText from '../../../components/Story/Components/StoryText/StoryText';
import './Navbar.css';

const Navbar = ({ product, products, website, websites, setProduct, setWebsite }) => {
  const mappedProductOptions = products.map(p => ({
    value: p.id,
    label: p.text,
  }));

  const mappedWebsiteOptions = websites.map(w => ({
    value: w.uuid,
    label: w.domain,
  }));

  return (
    <div className="Navbar">
      <Story>
        <StoryDropdown
          name="productSelector"
          options={mappedProductOptions}
          onChange={setProduct}
          active={product}
        />
        <StoryText text="for" />
        <StoryDropdown
          name="websiteSelector"
          options={mappedWebsiteOptions}
          onChange={setWebsite}
          active={website}
        />
        <StoryText text="." />
      </Story>
    </div>
  );
};

Navbar.defaultProps = {
  product: null,
  products: [],
  setProduct: () => {},
  website: null,
  websites: [],
  setWebsite: () => {},
};

Navbar.propTypes = {
  product: React.PropTypes.string,
  website: React.PropTypes.string,
  products: React.PropTypes.arrayOf(React.PropTypes.object),
  websites: React.PropTypes.arrayOf(React.PropTypes.object),
  setProduct: React.PropTypes.func,
  setWebsite: React.PropTypes.func,
};

export default Navbar;
