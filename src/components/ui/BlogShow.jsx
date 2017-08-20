import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Spinner from 'components/ui/shared/Spinner';
import Image from 'components/ui/Image';
import { editPostUrl } from 'helpers/routes/post'

export default class BlogShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        { this.props.isLoading && <Spinner /> }
        {
          !this.props.isLoading && !this.props.error && post &&
            <Image image={post.image} />
        }
        { this.props.error && <h1>Something wrong with {this.props.error}</h1> }
        <Link exact to={editPostUrl(post.id)} >
          <div>
            Edit
          </div>
        </Link>
      </div>
    );
  }
}

BlogShow.propTpes = {
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  post: PropTypes.array
};
