import React from 'react';
import PropTypes from 'prop-types';

import { parse } from 'qs';
import initialLoad from 'helpers/initialLoad';

import BlogShow from 'components/containers/BlogShow';
import { fetchPost } from 'actions/Post';
import { postUrl } from 'helpers/routes/post';

const BlogRoute = {
  exact: true,
  strict: true,
  path: postUrl(),
  prepareData: (store, state) => {
    if (initialLoad()) return;

    const { postId } = state.params;

    if (!!postId) return store.dispatch(fetchPost(postId));
  },
  render: ({ match }) => {
    return <BlogShow postId={ match.params.postId } />;
  }
};

BlogRoute.propTypes = {
  match: PropTypes.object.isRequired,
};

export default BlogRoute;
