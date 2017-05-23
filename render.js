import React from 'react';
import ReactDOMServer from 'react-dom/server';

import BlogList from './components/containers/BlogList';

const result = ReactDOMServer.renderToString(
  React.createElement(BlogList)
);

console.log(result);
