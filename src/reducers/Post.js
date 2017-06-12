import { assign } from 'lodash';

import * as types from 'constants/actionTypes/PostActionTypes';

const initialState = {
  isLoading: false,
  error: false,
  post: null
};

export default function(state, action) {
  switch (action.type) {
    default: return state;
  }
}

