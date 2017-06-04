import React, { Component } from 'react';
import axios from 'axios';

import Spinner from 'components/ui/shared/Spinner';
import Image from 'components/ui/Image';

export default class BlogShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      isLoading: true,
      error: ''
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/posts/${this.props.postId}`)
      .then(response => {
        this.setState({
          post: response.data,
          isLoading: false,
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          isLoading: false
        });
      });
  }

  render() {
    const { post } = this.state

    return (
      <div>
        <Image image={post.image} />
      </div>
    )
  }
}

