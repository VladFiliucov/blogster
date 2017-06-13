import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import BlogPage from 'components/containers/BlogPage';
import BlogShow from 'components/containers/BlogShow';
import MainLayout from 'components/layouts/MainLayout';
import Navigation from 'components/ui/shared/Navigation';
import About from 'components/ui/shared/About';

class ApplicationRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          <MainLayout>
            <Navigation />
            <div>
              <Route exact path="/" render={({match, location, history}) => (
                <BlogPage match={match}
                  location={location}
                  history={history} />
              ) } />
              <Route exact path="/about" component={ About } />
              <Route exact path="/posts/:postId" render={({match}) => (
                <BlogShow postId={match.params.postId} />
              )} />
            </div>
          </MainLayout>
        </Router>
      </div>
    );
  }
}

export default ApplicationRouter;

