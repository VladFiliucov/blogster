import reducer from 'reducers/Posts';
import * as types from 'constants/actionTypes/PostsActionTypes';

describe('posts reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isLoading: false,
        error: false,
        posts: []
      }
    );
  });
});

