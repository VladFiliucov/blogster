import postsReducer from 'reducers/Posts';
import * as types from 'constants/actionTypes/PostsActionTypes';

import { posts } from 'testFactories/posts';

const initialState = {
  isLoading: false,
  error: false,
  posts: []
};

const stateWithFetchedPosts = {
  posts,
  isLoading: false,
  error: false
};

describe('posts reducer', () => {
  it('should return initial state', () => {
    expect(postsReducer(undefined, {})).toEqual(initialState);
  });

  it('changes state to loading when posts are fetchin', () => {
    const action = {
      type: types.FETCH_POSTS_REQUEST
    };

    const expected = {
      isLoading: true,
      error: false,
      posts: []
    };

    const actual = postsReducer(initialState, action);
    expect(actual).toEqual(expected);
  });

  it('returns error true if fetching posts failed', () => {
    const action = {
      type: types.FETCH_POSTS_ERROR
    };

    const expected = {
      isLoading: false,
      error: true,
      posts: []
    };

    const actual = postsReducer(initialState, action);
    expect(actual).toEqual(expected);
  });

  it('increments likes for given post', () => {
    const action = {
      postId: 1,
      type: types.LIKE_POST
    };

    const expected = {
      isLoading: false,
      error: false,
      posts: [
        {
          id: 1,
          text: 'This is an awesome blogpost 1',
          details: {
            author: 'Avdi Grimm',
            createdAt: 'Yesterday',
            updatedAt: 'Tomorrow',
            likes: 13
          },
          image: {
            src: '/pictures/picture1.jpg',
            alt: 'Who cares',
            style: {width: 200, height: 200}
          }
        }
      ]
    };

    const actual = postsReducer(stateWithFetchedPosts, action);
    expect(actual).toEqual(expected);
  });
});

