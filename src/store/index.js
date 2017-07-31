import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import APIMiddleware from 'middleware/API';
import DevTools from 'components/containers/DevTools';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware),
    DevTools.instrument()
  )
);

export default store;

