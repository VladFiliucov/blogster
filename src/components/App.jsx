import React from 'react';
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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <MainLayout>
            <Navigation />
            <Route exact path="/" component={ BlogPage } />
            <Route exact path="/search/:term"
              component={ BlogPage }
              {...this.props.match}
            />
            <Route path="/about" component={ About } />
            <Route path="/posts/:postId" render={({match}) => (
              <BlogShow postId={match.params.postId} />
            )} />
          </MainLayout>
        </Router>
      </MuiThemeProvider>
    );
  }
};

export default App;

