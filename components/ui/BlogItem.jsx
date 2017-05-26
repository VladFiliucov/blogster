import React from 'react';

import Image from './Image';
import TextBox from './TextBox';
import PostDetails from './PostDetails';

const BlogItem = (props) => (
  <div>
    <Image image={props.post.image} />
    <TextBox>{props.post.text}</TextBox>
    <PostDetails details={props.post.details} />
  </div>
)

export default BlogItem;
