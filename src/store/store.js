import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'; //dev purpose
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducers from './root-reducer';

const { createBrowserHistory } = require('history');

const history = createBrowserHistory({ basename: '/' });

const rootReducer = combineReducers({
  ...reducers,
  router: connectRouter(history),
});

const middleware = [ routerMiddleware(history)];

const ENVIRONMENT = 'development';

if (ENVIRONMENT === 'development') {
  middleware.push(logger);
}

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);

export { history, store };
