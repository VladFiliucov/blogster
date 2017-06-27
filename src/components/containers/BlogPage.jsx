import { connect } from 'react-redux';
import { likePost } from 'actions/Posts';

import BlogPage from 'components/ui/BlogPage';

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  isLoading: state.posts.isLoading,
  error: state.posts.error
});

function mapDispatchToProps(dispatch) {
  return {
    likePost: (posts, postId) => dispatch(likePost(posts, postId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
