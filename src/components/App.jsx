import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  Switch,
  matchPath
} from 'react-router-dom';
import createRoutes from 'routes';

import { identity } from 'lodash/util';
import { assign } from 'lodash/object';

import { parse } from 'qs';

import createHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from 'components/ui/shared/Navigation';

import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';

import DevTools from 'components/containers/DevTools';

import createStore from 'store';
import prepareData from 'helpers/prepareData';

import history from 'routes/history';

const store = createStore(window.__INITIAL_STATE__);

class App extends React.Component {
  render() {
    const routes = createRoutes();

    function historyCb(location, action) {
      const state = { location, params: {}, routes: [], query: {}};

      routes.some(route => {
        const match = matchPath(location.pathname, route);

        if (match) {
          state.routes.push(route);
          assign(state.params, match.params);
          assign(state.query, parse(location.search.substr(1)));
        }
        return match;
      });


      const withoutScroll = (location.state || {}).withoutScroll;
      const nonPush = action != 'PUSH';

      prepareData(store, state);
      store.subscribe(
        identity,
        identity,
        () => nonPush || withoutScroll || window.scrollTo(0,0)
      );
    }

    history.listen(historyCb);

    historyCb(window.location);

    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <Router history={history} >
              <div>
                <Navigation />
                <Switch>
                  {
                    routes.map((route, i) => (
                      <RouteWithSubRoutes key={i} {...route} />
                    ))
                  }
                </Switch>
              </div>
            </Router>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools'),
  () => {
    delete window.__INITIAL_STATE__;
  }
);

export default App;

App.propTypes = {
  match: PropTypes.string
};

