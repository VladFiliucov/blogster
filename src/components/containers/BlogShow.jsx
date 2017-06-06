import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { SERVER_ENDPOINT } from 'constants/static/env';

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
    axios.get(`${SERVER_ENDPOINT}/posts/${this.props.postId}`)
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
    const { post } = this.state;

    return (
      <div>
        { this.state.isLoading && <Spinner /> }
        {
          !this.state.isLoading && !this.state.error &&
            <Image image={post.image} />
        }
        { this.state.error && <h1>Something wrong with {this.state.error}</h1> }
      </div>
    );
  }
}

BlogShow.propTypes = {
  postId: PropTypes.number.isRequired
};

