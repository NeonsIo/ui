import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Root from './containers/App/Root';

document.title = 'neons.io';

const element = React.createElement(
  Provider, {
    store: configureStore({}),
  },
  React.createElement(Root),
);

ReactDOM.render(element, document.getElementById('root'));
