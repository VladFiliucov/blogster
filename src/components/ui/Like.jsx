import React from 'react';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';

import RaisedButton from 'material-ui/RaisedButton';
injectTapEventPlugin();

const Like = ({likes, postId, likePost, posts}) => (
  <div>
    {likes}
    <RaisedButton label="Like"
      onClick={() => likePost(posts, postId)}
      className="like-button" />
  </div>
);

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  likes: PropTypes.number.isRequired,
  postId: PropTypes.number
};

export default Like;
