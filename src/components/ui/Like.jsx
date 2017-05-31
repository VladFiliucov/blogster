import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';

const Like = ({likes, incrementLikes, postId}) => (
  <div>
    {likes}
    <RaisedButton label="Like" onClick={() => incrementLikes(postId)} className="booking-a-view-button" />
  </div>
);

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  likes: PropTypes.number.isRequired,
  incrementLikes: PropTypes.func.isRequired
};

export default Like;
