import { assign } from 'lodash';

import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  isLoading: false,
  error: false,
  posts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isLoading: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { posts: action.response });
    default: return state;
  }
}

