import React from 'react';
import { Router, Route } from 'dva/router';
import Counter from './routes/Counter';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Counter} />
    </Router>
  );
}

export default RouterConfig;
