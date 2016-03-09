import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import makeRoutes from './routes';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const routes = makeRoutes();
const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Root history={history} routes={routes} store={store}/>,
  document.getElementById('app')
);
