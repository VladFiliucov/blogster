import React from 'react';
import PropTypes from 'prop-types';

const Like = ({likes, incrementLikes, postId}) => (
  <div>
    {likes}
    <button onClick={() => incrementLikes(postId)} >+</button>
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
