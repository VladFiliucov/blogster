import axios from 'axios';

import { SERVER_ENDPOINT } from 'constants/static/env';
import { postPath } from 'helpers/routes/post.js';

import * as types from 'constants/actionTypes/PostActionTypes';

const requestPost = (id) => ({
  id,
  type: types.FETCH_POST_REQUEST
});

const receivePost = (response) => ({
  response,
  type: types.FETCH_POST_SUCCESS
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

export function fetchPost(id) {
  const querryObject = { id, BASE_URL: SERVER_ENDPOINT };

  return (dispatch) => {
    dispatch(requestPost(id));

    return axios
      .get(postPath(querryObject))
      .then(response => {
        dispatch(receivePost(response.data));
      })
      .catch(error => {
        dispatch(errorPost());
      });
  };
}
