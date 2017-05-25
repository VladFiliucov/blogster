import React from 'react';

import Image from './Image';
import TextBox from './TextBox';

const BlogItem = (props) => (
  <div>
    <Image post={props.post} />
    <TextBox>{props.text}</TextBox>
  </div>
)

export default BlogItem;
