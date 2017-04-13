import React, { PropTypes } from 'react';
import './StoryDropdown.css';
import '../../../../../node_modules/react-select/dist/react-select.css';

class StoryDropdown extends React.Component {
  constructor(props, state) {
    super(props, state);

    this.state = {
      isOpen: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleTouchOutside = this.handleTouchOutside.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isOpen !== this.state.isOpen) {
      this.toggleTouchOutsideEvent(nextState.isOpen);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleTouchOutside, false);
  }

  handleMouseDown() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleTouchOutsideEvent(enabled) {
    if (enabled) {
      document.addEventListener('click', this.handleTouchOutside, false);
    } else {
      document.removeEventListener('click', this.handleTouchOutside, false);
    }
  }

  handleTouchOutside(event) {
    if (this.wrapper && !this.wrapper.contains(event.target)) {
      this.closeMenu();
    }
  }

  closeMenu() {
    this.setState({
      isOpen: false,
    });
  }

  selectValue(value) {
    this.setState({
      isOpen: false,
    }, () => {
      this.props.onChange(value);
    });
  }

  displayActiveLabel() {
    const { options, active } = this.props;
    return options.filter(option => option.value === active)[0].label;
  }

  createListElement() {
    if (!this.state.isOpen) {
      return null;
    }

    return (
      <div className="StoryDropdown--list">
        {this.props.options.map(this.renderItem, this)}
      </div>
    );
  }

  renderItem(item) {
    return (
      <div
        className={`StoryDropdown--item ${this.props.active === item.value ? 'active' : ''}`}
        onMouseDown={this.selectValue.bind(this, item)}
        key={item.value}
      >
        {item.label}
      </div>
    );
  }

  render() {
    return (
      <div ref={(node) => { this.wrapper = node; }} className="StoryDropdown" >
        <div className="StoryDropdown--label" onMouseDown={this.handleMouseDown} >
          {this.displayActiveLabel()}
        </div>
        {this.createListElement()}
      </div>
    );
  }
}

StoryDropdown.defaultProps = {
  active: null,
  onChange: () => {},
  options: [],
};

StoryDropdown.propTypes = {
  active: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
};

export default StoryDropdown;
