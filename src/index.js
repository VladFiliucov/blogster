import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from 'components/App';

const rootElement = document.getElementById('blog');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer >
      <App />
    </AppContainer>,
    rootElement
  );
};

render(App);

if (module.hot) {
  module.hot.accept('components/App', () => {
    render(App);
  });
}
