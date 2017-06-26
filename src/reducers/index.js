import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './Posts';
import post from './Post';

export default combineReducers({
  posts,
  post,
  router: routerReducer
});

