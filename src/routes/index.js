import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import MainPage from '../pages/Main';
import OtherPage from '../pages/Other';

export default () => (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage}/>
    <Route path="/other" component={OtherPage}/>
  </Route>
);
