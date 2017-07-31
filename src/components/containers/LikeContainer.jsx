import { connect } from 'react-redux';
import { likePost } from 'actions/Posts';

import Like from 'components/ui/Like';

const mapDispatchToProps = (dispatch, ownProps) => ({
  likePost: () => dispatch(likePost(ownProps.postId))
});

const mapStateToProps = (state) => ({
  posts: state.posts.posts
});

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  Object.assign({}, ownProps, {
    likes: stateProps.posts
      .find(post => post.id == ownProps.postId).details.likes,
    likePost: () => dispatchProps.likePost(ownProps.postId)
  })
);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Like);
