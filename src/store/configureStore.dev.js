import { createStore, applyMiddleware, compose } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { install } from 'redux-loop';
// import normalizrMiddleware from 'redux-normalizr-middleware';
import DevTools from '../containers/DevTools';
import rootReducer from '../reducers';

const reduxRouterMiddleware = routerMiddleware(hashHistory);

export default function configureStore(initialState) {
  const createPersistentStore = compose(
    install(),
    applyMiddleware(
      reduxRouterMiddleware
    ),
    DevTools.instrument()
  )(createStore);

  const store = createPersistentStore(
    rootReducer,
    initialState
  );

  // Required for replaying actions from devtools to work
  // reduxRouterMiddleware.listenForReplays(store);

  return store;
}
