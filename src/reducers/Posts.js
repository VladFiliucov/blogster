import { assign } from 'lodash';

import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  isLoading: false,
  error: false,
  posts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}

