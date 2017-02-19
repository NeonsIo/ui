import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Dashboard from '../../Dashboard/Dashboard';

const Root = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard} />
  </Router>
);

export default Root;
