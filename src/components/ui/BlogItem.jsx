import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';
import PostDetails from './PostDetails';
import Like from './Like';

const BlogItem = ({post, incrementLikes}) => (
  <div>
    <Image image={post.image} />
    <TextBox>{post.text}</TextBox>
    <PostDetails details={post.details} />
    <Like
      likes={post.details.likes}
      incrementLikes={incrementLikes} />
  </div>
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    details: PropTypes.shape({
      author: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
      likes: PropTypes.number
    }),
    image: Image.propTypes.image
  })
};

export default BlogItem;
