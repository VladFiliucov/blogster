import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import BlogPage from './containers/BlogPage';

const App = () => (
  <MuiThemeProvider>
    <BlogPage />
  </MuiThemeProvider>
);

export default App;
