import React from 'react';

import Image from './Image';
import TextBox from './TextBox';

const BlogItem = (props) => (
  <div>
    <Image
      imageAddress={props.imageURL}
      style={props.style}
      altText={props.altText}
    />
    <TextBox>{props.text}</TextBox>
  </div>
)

export default BlogItem;
