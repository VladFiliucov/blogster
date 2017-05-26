import React from 'react';

const PostDetails = ({details}) => (
  <div>
    <h3>Author: {details.author}</h3>
    <h3>Created At: {details.created_at}</h3>
    <h3>Last Update: {details.updated_at}</h3>
  </div>
);

export default PostDetails;

