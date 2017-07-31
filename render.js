import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from 'components/App';

const result = ReactDOMServer.renderToString(
  React.createElement(App)
);

console.log(result);
