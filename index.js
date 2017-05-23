require('babel-register');
import React from 'react';

import BlogItem from './ui/BlogItem';

const Main = () => (
  <BlogItem />
  <BlogItem />
  <BlogItem />
)

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
