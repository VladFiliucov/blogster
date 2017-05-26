import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';
import PostDetails from './PostDetails';
import Like from './Like';

const BlogItem = (props) => (
  <div>
    <Image image={props.post.image} />
    <TextBox>{props.post.text}</TextBox>
    <PostDetails details={props.post.details} />
    <Like likes={props.post.details.likes} />
  </div>
)

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
    image: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      style: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number
      })
    })
  })
}

export default BlogItem;
