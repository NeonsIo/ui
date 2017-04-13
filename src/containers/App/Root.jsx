import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Main from './Main';

const Root = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
  </Router>
);

export default Root;
