import { connect } from 'react-redux';

import BlogShow from 'components/ui/BlogShow';

const mapStateToProps = (state) => ({
  post: state.post.post,
  isLoading: state.post.isLoading,
  error: state.post.error
});

export default connect(mapStateToProps)(BlogShow);
