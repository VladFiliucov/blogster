import React from 'react';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';

import RaisedButton from 'material-ui/RaisedButton';
injectTapEventPlugin();

const Like = ({likes, postId}) => (
  <div>
    {likes}
    <RaisedButton label="Like"
      onClick={() => console.log("Increment Likes");}
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
