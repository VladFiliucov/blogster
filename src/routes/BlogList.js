import React from 'react';
import BlogPage from 'components/containers/BlogPage';
import { fetchPosts } from 'actions/Posts';
import { parse } from 'qs';

const BlogsRoute = {
  exact: true,
  path: '/',
  prepareData(store, state) {
    if (state.query.q) {
      return store.dispatch(
        fetchPosts(state.query.q)
      );
    } else {
      return store.dispatch(fetchPosts());
    }
  },
  render: ({ location }) => (
    <BlogPage searchTerm={ parse(location.search.slice(1)) } />
  )
};

export default BlogsRoute;
