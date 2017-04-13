import React, { PropTypes, Component } from 'react';
import Label from '../Label/Label';
import './Input.css';

class Input extends Component {
  constructor(props, state) {
    super(props, state);

    this.state = {
      inputValue: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    const { placeholder, className, label, type, id } = this.props;
    const { inputValue } = this.state;
    const classes = `Input ${className}`;

    return (
      <div className="InputWithLabel">
        {label ? <Label htmlFor="input" text={label} /> : null}
        <input
          type={type}
          id={id}
          onChange={this.onInputChange}
          className={`${classes} ${inputValue ? 'Input-initialized' : null}`}
          placeholder={placeholder}
          value={inputValue}
        />
      </div>
    );
  }
}

Input.defaultProps = {
  className: '',
  placeholder: '',
  label: '',
  type: 'text',
  id: '',
};

Input.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default Input;
