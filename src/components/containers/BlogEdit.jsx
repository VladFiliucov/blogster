import { connect } from 'react-redux';

import EditPost from 'components/views/EditPost';

const mapStateToProps = (state) => ({
  post: state.post.post,
  isLoading: state.post.isLoading,
  error: state.post.error
});

export default connect(mapStateToProps)(EditPost);
