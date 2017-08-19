import { connect } from 'react-redux';

import Show from 'components/views/Show';

const mapStateToProps = (state) => ({
  post: state.post.post,
  isLoading: state.post.isLoading,
  error: state.post.error
});

export default connect(mapStateToProps)(Show);
