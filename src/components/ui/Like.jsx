import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';

import RaisedButton from 'material-ui/RaisedButton';
injectTapEventPlugin();

class Like extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.likes}
        <RaisedButton label="Like"
          onClick={() => this.props.likePost(this.props.posts)}
          className="like-button" />
      </div>
    );
  }
}

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  likes: PropTypes.number.isRequired,
  postId: PropTypes.number
};

export default Like;
