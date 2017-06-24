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
      // Create our own router state.
      const state = { location, params: {}, routes: [], query: {}};

      routes.some(route => {
        // Check if url address we are going to corresponds path in one of our route objects.
        const match = matchPath(location.pathname, route);

        if (match) {
          state.routes.push(route);
          // This is not used yet as we are getting queries from location search.
          assign(state.params, match.params);
          // This will return object with params withour ? at start.
          assign(state.query, parse(location.search.substr(1)));
        }
        return match;
      });


      // ???
      const withoutScroll = (location.state || {}).withoutScroll;
      const nonPush = action != 'PUSH';

      prepareData(store, state).subscribe(
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
  document.getElementById('devtools')
);

export default App;

App.propTypes = {
  match: PropTypes.string
};

