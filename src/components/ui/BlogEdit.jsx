import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from 'components/ui/shared/Spinner';
import Image from 'components/ui/Image';
import BlogEditForm from 'components/ui/BlogEditForm'

export default class BlogEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        <h1>This is edit page</h1>
        { this.props.isLoading && <Spinner /> }
        {
          !this.props.isLoading && !this.props.error && post &&
            <div>
              <Image image={post.image} />
              <BlogEditForm post={post} />
            </div>
        }
        { this.props.error && <h1>Something wrong with {this.props.error}</h1> }
      </div>
    );
  }
}

BlogEdit.propTpes = {
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  post: PropTypes.array
};
