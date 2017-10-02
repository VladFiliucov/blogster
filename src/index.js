import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from 'components/App';

const rootElement = document.getElementById('blog');

const render = () => {
  ReactDOM.render(
    <AppContainer >
      <App />
    </AppContainer>,
    rootElement,
    () => {
      delete window.__INITIAL_STATE__;
    }
  );
};

render(App);

if (module.hot) {
  module.hot.accept('components/App', () => {
    render(App);
  });
}
