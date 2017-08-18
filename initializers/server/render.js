import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter as Router, Switch, matchPath } from 'react-router-dom';
import { assign } from 'lodash/object';
import { compact } from 'lodash/array';
import { parse } from 'qs';

import createStore from 'store';

import createRoutes from 'routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from 'components/ui/shared/Navigation';
import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';

import prepareData from 'helpers/prepareData';

export default (req, res) => {
  const context = {};

  const routes = createRoutes();
  const store = createStore();

  const state = {
    params: {},
    routes: [],
    query: {}
  };

  routes.some(route => {
    const match = matchPath(req.url, route);

    if (match)
    {
      state.routes.push(route);
      assign(state.params, match.params)
      assign(state.query, req.query);
    }
    return match;
  });


  Promise.all(
    compact(
      state.routes.map(route => (
        !!route.prepareData && route.prepareData(store, state)
      ))
    )
  ).then(() => {
    const initialState = JSON.stringify(store.getState());

    const content = ReactDOMServer.renderToString(
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <Router location={req.url} context={context} >
              <div>
                <Navigation />
                <Switch>
                  {
                    state.routes.map((route, i) => (
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

    res.status(200);
    res.render(
      'index',
      { initialState, content }
    );
  })
    .catch(error => {
      console.log("The error is", error);
    }) ;
};
