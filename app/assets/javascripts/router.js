import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import ApplicationContainer from './containers/ApplicationContainer';
import HomePageContainer from './containers/HomePageContainer';

const router = () => (
  <Router history={browserHistory} >
    <Route path='/' component={ApplicationContainer} >
      <IndexRoute component={HomePageContainer} />
    </Route>
  </Router>
);

export default router;
