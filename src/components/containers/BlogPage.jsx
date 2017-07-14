import { connect } from 'react-redux';
import update from 'immutability-helper';

import { postUrlObject } from 'helpers/routes/post';
import BlogPage from 'components/ui/BlogPage';

const mapStateToProps = (state) => ({
  posts: state.posts.posts
    .map(post => update(post,
      {
        $merge: {
          postUrl: postUrlObject(post.id)
        }
      }
    )),
  isLoading: state.posts.isLoading,
  error: state.posts.error
});

export default connect(mapStateToProps)(BlogPage);
