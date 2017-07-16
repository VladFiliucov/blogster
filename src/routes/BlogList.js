import React from 'react';
import BlogPage from 'components/containers/BlogPage';
import { fetchPosts } from 'actions/Posts';
import { push } from 'react-router-redux';

const BlogsRoute = {
  exact: true,
  path: '/',
  prepareData: (store, state) => {
    if (state.location.search) {
      store.dispatch(fetchPosts(state.location.search));
    } else {
      store.dispatch(fetchPosts());
    }
  },
  render: ({ location }) => (
    <BlogPage searchTerm={ location.search.slice(1) } />
  )
};

export default BlogsRoute;
