import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from './Image';
import TextBox from './TextBox';
import PostDetails from './PostDetails';
import Like from './Like';

import 'components/styles/blog/BlogItem.css'

const BlogItem = ({ post, posts}) => (
  <div className="wrapper card radius shadowDepth1">
    <Link  to={{pathname: '/posts', search: `postId=${post.id}`}} >
      <Image image={post.image} />
    </Link>
    <div className="card__content card__padding">
      <PostDetails details={post.details} />
      <TextBox>{post.text}</TextBox>
      <Like
        likes={post.details.likes}
        postId={post.id}
        posts={posts} />
    </div>
  </div>
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    details: PostDetails.propTypes.details,
    image: Image.propTypes.image
  })
};

export default BlogItem;
