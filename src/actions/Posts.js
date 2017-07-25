import * as types from 'constants/actionTypes/PostsActionTypes';

import { API_CALL } from 'middleware/API';

function fetchPosts() {
  return {
    [API_CALL]: {
      endpoint: '/',
      method: 'GET',
      query: {},
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}

export const likePost = (posts, postId) => (
  {
    posts,
    postId,
    type: types.LIKE_POST
  }
);




import { SERVER_ENDPOINT } from 'constants/static/env';
import { postsPath } from 'helpers/routes/posts.js';


export function fetchPosts(searchTerm) {
  const querryObject = { searchTerm, BASE_URL: SERVER_ENDPOINT };

  return (dispatch) => {
    dispatch(requestPosts());

    return axios
    .get(postsPath(querryObject))
      .then(response => {
        dispatch(recievePosts(response.data));
      })
      .catch(() => {
        dispatch(errorPosts());
      });
  };
}

