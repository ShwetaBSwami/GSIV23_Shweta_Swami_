import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './rootReducer';

const history = createBrowserHistory();
const routerMiddlewareInstance = routerMiddleware(history);

const store = createStore(
  rootReducer,
  applyMiddleware(routerMiddlewareInstance)
);

export { store, history };


