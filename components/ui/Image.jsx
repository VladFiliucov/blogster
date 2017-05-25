import React from 'react';

const Image = (props) => (
  <div>
     <img
       src={props.post.src}
       style={props.post.style}
       alt={props.post.alt}
     />
  </div>
)

export default Image;
