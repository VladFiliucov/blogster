import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import APIMiddleware from 'middleware/API';
import DevTools from 'components/containers/DevTools';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware),
    applyMiddleware(middleware),
    DevTools.instrument()
  )
);

export default store;

