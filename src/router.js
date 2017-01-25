import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import NotFound from './routes/NotFound';
import HomeGrid from './routes/HomeGrid';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={HomeGrid} />
      <Route path="*" component={NotFound} />
    </Router>
  );
};
