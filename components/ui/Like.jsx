import React from 'react';
import PropTypes from 'prop-types';

const Like = (props) => (
  <div>
    {props.likes}
    <button onClick={() => props.incrementLikesForPost(props.postId)} >+</button>
  </div>
);

Like.defaultProps = {
  likes: 0
}

Like.propTypes = {
  likes: PropTypes.number.isRequired,
  incrementLikesForPost: PropTypes.func.isRequired
}

export default Like;
