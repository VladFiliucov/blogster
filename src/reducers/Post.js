import { assign } from 'lodash';

import * as types from 'constants/actionTypes/PostActionTypes';

const initialState = {
  isLoading: false,
  error: false,
  post: null
};

export default function(state, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, { isLoading: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState, { post: action.response });
    default: return state;
  }
}

