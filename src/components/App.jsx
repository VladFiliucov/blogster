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

