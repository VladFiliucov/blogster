import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  matchPath
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createRoutes from 'routes';

import { identity } from 'lodash/util';
import { assign } from 'lodash/object';

import { parse } from 'qs';

import createHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from 'components/ui/shared/Navigation';

import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';

import DevTools from 'components/containers/DevTools';

import store from 'store';
import prepareData from 'helpers/prepareData';

const history = createHistory();

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
            <ConnectedRouter history={history} >
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
            </ConnectedRouter>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools')
);

export default App;

App.propTypes = {
  match: PropTypes.string
};

