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
    <TextBox text={props.text} />
  </div>
)

export default BlogItem;
