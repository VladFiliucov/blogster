import React from 'react';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';

import RaisedButton from 'material-ui/RaisedButton';
injectTapEventPlugin();

const Like = (props) => (
  <div>
    {props.likes}
    <RaisedButton label="Like"
      onClick={() => props.likePost(props.posts, props.postId)}
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
