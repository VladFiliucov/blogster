import React, { Component } from 'react';

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes || 0
    }
    this.incrementLikes = this.incrementLikes.bind(this)
  }

  incrementLikes() {
    this.setState({ likes: this.state.likes + 1 })
  }

  render() {
    return (
      <div>
        {this.state.likes}
        <button onClick={this.incrementLikes} >+</button>
      </div>
    );
  }
}
export default Like;
