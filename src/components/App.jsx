import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import BlogPage from 'components/containers/BlogPage';
import BlogShow from 'components/containers/BlogShow';
import MainLayout from 'components/layouts/MainLayout';
import Navigation from 'components/ui/shared/Navigation';
import About from 'components/ui/shared/About';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <MainLayout>
            <Navigation />
            <Route exact path="/" render={({match, location, history}) => (
              <BlogPage match={match}
                location={location}
                history={history} />
            ) } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/posts/:postId" render={({match}) => (
              <BlogShow postId={match.params.postId} />
            )} />
          </MainLayout>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

App.propTypes = {
  match: PropTypes.string
};

