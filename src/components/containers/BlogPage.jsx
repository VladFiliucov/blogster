import { connect } from 'react-redux';

import BlogPage from 'components/ui/BlogPage';

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  isLoading: state.posts.isLoading,
  error: state.posts.error
});

export default connect(mapStateToProps)(BlogPage);
