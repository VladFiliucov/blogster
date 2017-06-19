import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import routes from 'routes';

import createHistory from 'history/createBrowserHistory';
import { withRouter } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DevTools from 'components/containers/DevTools';

import store from 'store';
import ApplicationRouter from 'routes';
import prepareData from 'helpers/prepareData';

const history = createHistory();

history.listen(function(location) {
  match({location, routes}, (error, redirect, state) => {
    if (!error && !redirect) {
      prepareData(store, state);
    }
  });
});

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    route.render ? route.render(props) : <route.component {...props} routes={route.routes}/>
  )}/>
);

class App extends React.Component {
  render() {
  console.log(history);
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router history={history} >
            <Switch>
              {
                routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))
              }
            </Switch>
          </Router>
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

