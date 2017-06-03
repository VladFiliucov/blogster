import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';
import PostDetails from './PostDetails';
import Like from './Like';

import 'components/styles/blog/BlogItem.css'

const BlogItem = ({post, incrementLikes}) => (
  <div className="wrapper card radius shadowDepth1">
    <Image image={post.image} />
    <div class="card__content card__padding">
      <PostDetails details={post.details} />
      <TextBox>{post.text}</TextBox>
      <Like
        likes={post.details.likes}
        incrementLikes={incrementLikes}
        postId={post.id} />
    </div>
  </div>
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    details: PostDetails.propTypes.details,
    image: Image.propTypes.image
  }),
  incrementLikes: PropTypes.func
};

export default BlogItem;
