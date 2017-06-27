import { connect } from 'react-redux';
import { likePost } from 'actions/Posts';

import Like from 'components/ui/Like';

function mapDispatchToProps(dispatch) {
  return {
    likePost: (posts, postId) => dispatch(likePost(posts, postId))
  };
}

export default connect(null, mapDispatchToProps)(Like);
