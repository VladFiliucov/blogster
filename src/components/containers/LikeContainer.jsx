import { connect } from 'react-redux';
import { likePost } from 'actions/Posts';

import Like from 'components/ui/Like';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    likePost: () => dispatch(likePost(ownProps.posts, ownProps.postId))
  };
}

export default connect(null, mapDispatchToProps)(Like);
