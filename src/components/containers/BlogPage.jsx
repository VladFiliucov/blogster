import { connect } from 'react-redux';
import update from 'immutability-helper';

import { postUrlObject } from 'helpers/routes/post';
import { assign } from 'lodash';
import BlogPage from 'components/ui/BlogPage';

const mapStateToProps = (state) => ({
  posts: state.posts.posts
    .map(post => assign(
      {}, post, {
        postUrl: postUrlObject(post.id)
      })
    ),
  isLoading: state.posts.isLoading,
  error: state.posts.error
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return ownProps.searchTerm.q
    ? Object.assign({}, ownProps, { posts: stateProps.posts.filter(post => { return post.text.toLowerCase().indexOf(ownProps.searchTerm.q.toLowerCase()) > - 1; }) })
    : Object.assign({}, ownProps, { posts: stateProps.posts })
};

export default connect(mapStateToProps, null, mergeProps)(BlogPage);
