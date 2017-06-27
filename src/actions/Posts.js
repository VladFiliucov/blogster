import axios from 'axios';

import { SERVER_ENDPOINT } from 'constants/static/env';
import { postsPath } from 'helpers/routes/posts.js';

import * as types from 'constants/actionTypes/PostsActionTypes';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const recievePosts = (response) => ({
  response,
  type: types.FETCH_POSTS_SUCCESS
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export function likePost(posts, postId) {
  return {
    posts,
    postId,
    type: types.LIKE_POST
  };
}

export function fetchPosts(searchTerm) {
  const querryObject = { searchTerm, BASE_URL: SERVER_ENDPOINT };

  return (dispatch) => {
    dispatch(requestPosts());

    return axios
    .get(postsPath(querryObject))
      .then(response => {
        dispatch(recievePosts(response.data));
      })
      .catch(error => {
        dispatch(errorPosts());
      });
  };
}

