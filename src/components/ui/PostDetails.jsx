import React from 'react';
import PropTypes from 'prop-types';

const PostDetails = ({details}) => (
  <div className="card__author">
    <div class="card__meta">
      <h3>Author: {details.author}</h3>
      <h3>Created At: {details.createdAt}</h3>
      <h3>Last Update: {details.updatedAt}</h3>
    </div>
  </div>
);

PostDetails.propTypes = {
  details: PropTypes.shape({
    author: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    likes: PropTypes.number
  })
};

export default PostDetails;

