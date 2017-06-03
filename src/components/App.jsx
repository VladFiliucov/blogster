import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import BlogPage from 'components/containers/BlogPage';
import MainLayout from 'components/layouts/MainLayout';

const App = () => (
  <MuiThemeProvider>
    <MainLayout>
      <Router>
        <Route exact path="/" render={ () => <BlogPage /> } />
      </Router>
    </MainLayout>
  </MuiThemeProvider>
);

export default App;

