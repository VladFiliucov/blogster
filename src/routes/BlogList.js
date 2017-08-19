import React from 'react';
import BlogPage from 'components/containers/BlogPage';
import { fetchPosts } from 'actions/Posts';
import { parse } from 'qs';
import initialLoad from 'helpers/initialLoad';

const BlogsRoute = {
  exact: true,
  strict: true,
  path: '/',
  prepareData(store, state) {
    if (initialLoad()) return;

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
