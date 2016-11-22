import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import HomePage from './routes/HomePage';
import HomeMotion from './routes/HomeMotion';
import Sidebar from './routes/Sidebar';
import NotFound from './routes/NotFound';
import Products from './routes/Products';
import Lab from './routes/Lab';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/home-motion" component={HomeMotion} />
      <Route path="/sidebar" component={Sidebar} />
      <Route path="/products" component={Products} />
      <Route path="/lab" component={Lab} />
      <Route path="*" component={NotFound} />
    </Router>
  );
};
