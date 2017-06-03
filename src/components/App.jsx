import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import BlogPage from 'components/containers/BlogPage';
import MainLayout from 'components/layouts/MainLayout';
import Navigation from 'components/ui/shared/Navigation';

const App = () => (
  <MuiThemeProvider>
      <Router>
    <MainLayout>
        <Navigation />
        <Route exact path="/" render={ () => <BlogPage /> } />
    </MainLayout>
      </Router>
  </MuiThemeProvider>
);

export default App;

