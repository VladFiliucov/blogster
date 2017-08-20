import React from 'react';
import PropTypes from 'prop-types';

import { parse } from 'qs';
import initialLoad from 'helpers/initialLoad';

import BlogEdit from 'components/containers/BlogEdit';
import { fetchPost } from 'actions/Post';
import { editPostUrl } from 'helpers/routes/post';

const EditBlogRoute = {
  exact: true,
  strict: true,
  path: editPostUrl(),
  prepareData: (store, state) => {
    if (initialLoad()) return;

    const { postId } = state.params;

    if (!!postId) return store.dispatch(fetchPost(postId));
  },
  render: ({ match }) => {
    return <BlogEdit postId={ match.params.postId } />;
  }
};

EditBlogRoute.propTypes = {
  match: PropTypes.object.isRequired,
};

export default EditBlogRoute;
