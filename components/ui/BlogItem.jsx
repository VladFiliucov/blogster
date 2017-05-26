import React from 'react';

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

export default BlogItem;
