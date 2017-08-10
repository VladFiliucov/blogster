import React from 'react';
import PropTypes from 'prop-types';

import BlogShow from 'components/containers/BlogShow';
import { fetchPost } from 'actions/Post';

const BlogRoute = {
  exact: true,
  path: '/posts',
  prepareData: (store, state) => {
    const { postId } = state.query;

    if (postId) return store.dispatch(fetchPost(postId));
  },
  render: ({ location }) => (
    // <BlogShow postId={new URLSearchParams(location.search).get('postId')} />
    <BlogShow postId={1} />
  )
};

BlogRoute.propTypes = {
  location: PropTypes.object.isRequired,
};

export default BlogRoute;
