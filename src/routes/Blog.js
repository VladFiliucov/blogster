import React from 'react';
import PropTypes from 'prop-types';

import BlogShow from 'components/containers/BlogShow';
import { fetchPost } from 'actions/Post';

const BlogRoute = {
  exact: true,
  path: '/posts',
  prepareData(store) {
    return store.dispatch(
      fetchPost(new URLSearchParams(location.search).get('postId')));
  },
  render: ({ location }) => (
    <BlogShow postId={new URLSearchParams(location.search).get('postId')} />
  )
};

BlogRoute.propTypes = {
  location: PropTypes.object.isRequired,
};

export default BlogRoute;
