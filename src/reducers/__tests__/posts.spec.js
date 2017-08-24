import postsReducer from 'reducers/Posts';
import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  isLoading: false,
  error: false,
  posts: []
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
});

