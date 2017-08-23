import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from './Image';
import TextBox from './TextBox';
import PostDetails from './PostDetails';
import LikeContainer from 'components/containers/LikeContainer';

import 'components/styles/blog/BlogItem.css'

const BlogItem = ({ post }) => (
  <div className="wrapper card radius shadowDepth1">
    { post &&
        <div>
          <Link  to={post.postUrl} >
            <Image image={post.image} />
          </Link>
          <div className="card__content card__padding">
            <PostDetails details={post.details} />
            <TextBox>{post.text}</TextBox>
            <LikeContainer postId={post.id} />
          </div>
        </div>
    }
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
