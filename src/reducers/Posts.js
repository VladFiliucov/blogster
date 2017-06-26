import { assign } from 'lodash';
import update from 'immutability-helper';

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
    case types.LIKE_POST:
      return assign({}, initialState, {
        posts: incrementLikes(action.posts, action.postId)
      });
    default: return state;
  }
}

const incrementLikes = (posts, postId) => {
  const postIndex = posts.findIndex(post => post.id == postId);
  let updatedPosts;

  if (postIndex > -1) {
    const post = posts[postIndex];
    const updatedPost = update(post, {
      details: {likes: {$set: (post.details.likes + 1)}}
    });

    updatedPosts = {
      posts: posts
      .slice(0, postIndex)
      .concat(updatedPost)
      .concat(posts.slice(postIndex + 1))
    };
  }
  return updatedPosts;
};

