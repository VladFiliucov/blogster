import React from 'react';
import PropTypes from 'prop-types';

import { parse } from 'qs';
import initialLoad from 'helpers/initialLoad';

import BlogShow from 'components/containers/BlogShow';
import { fetchPost } from 'actions/Post';
import { postUrlObject } from 'helpers/routes/post';

const BlogRoute = {
  exact: true,
  strict: true,
  path: postUrlObject(),
  prepareData: (store, state) => {
    if (initialLoad()) return;

    const { postId } = state.query;

    if (!!postId) return store.dispatch(fetchPost(postId));
  },
  render: ({ location }) => {
    console.log("GOT HERE");
    return <BlogShow postId={ parse(location.search.substr(1).postId) } />
  }
};

BlogRoute.propTypes = {
  location: PropTypes.object.isRequired,
};

export default BlogRoute;
