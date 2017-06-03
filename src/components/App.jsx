import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import BlogPage from 'components/containers/BlogPage';
import MainLayout from 'components/layouts/MainLayout';

const App = () => (
  <MuiThemeProvider>
    <MainLayout>
      <BlogPage />
    </MainLayout>
  </MuiThemeProvider>
);

export default App;
