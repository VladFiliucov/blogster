import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { matchPath } from 'react-router-dom';
import { assign } from 'lodash/object';
import { parse } from 'qs';

import store from 'store';
let createRoutes = require('routes').default;

import prepareData from 'helpers/prepareData';

export default (req, res) => {
  const routes = createRoutes();

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
      assign(state.params, match.params);
      assign(state.query, req.query);
    }
    return match;
  });

  Promise.all([prepareData(store, state)]).then(() => {
    const initialState = JSON.stringify(store.getState());

    res.status(200);
    res.render(
      'index',
      { initialState }
    );
  });
};
