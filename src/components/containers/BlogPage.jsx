import { connect } from 'react-redux';
import { filter } from 'lodash/collection';
import { assign } from 'lodash';

import { postUrl } from 'helpers/routes/post';
import Index from 'components/views/Index';

const mapStateToProps = (state) => ({
  posts: state.posts.posts
    .map(post => assign(
      {}, post, {
        postUrl: postUrl(post.id)
      })
    ),
  isLoading: state.posts.isLoading,
  error: state.posts.error
});

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  Object.assign(
    {},
    ownProps,
    {
      posts: ownProps.searchTerm.q ?
      filter(
        stateProps.posts,
        ({ text }) => (
          text.toLowerCase().indexOf(ownProps.searchTerm.q.toLowerCase()) > - 1
        )
      )
      : stateProps.posts
    }
  )
);

export default connect(mapStateToProps, null, mergeProps)(Index);
