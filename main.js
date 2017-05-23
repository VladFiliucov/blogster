import React from 'react';
import ReactDOMServer from 'react-dom/server';

import BlogList from './containers/BlogList';

const Main = () => (
  <BlogList />
)

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
