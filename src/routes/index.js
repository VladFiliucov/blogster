import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Blog from 'routes/Blog';

import BlogPage from 'components/containers/BlogPage';
import BlogShow from 'components/containers/BlogShow';
import MainLayout from 'components/layouts/MainLayout';
import Navigation from 'components/ui/shared/Navigation';
import About from 'components/ui/shared/About';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

class ApplicationRouter extends Component {
  render() {
    return (
      <MainLayout>
        <Navigation />
        <div>
          <Route exact path="/" render={({match, location, history}) => (
            <BlogPage match={match}
              location={location}
              history={history}
               />
          ) } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/posts/:postId" render={({match}) => (
            <BlogShow postId={match.params.postId} />
          )} />
        </div>
      </MainLayout>
    );
  }
}

export default [Blog]

