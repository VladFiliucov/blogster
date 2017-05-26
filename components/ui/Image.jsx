import React from 'react';

const Image = (props) => (
  <div>
     <img
       src={props.image.src}
       style={props.image.style}
       alt={props.image.alt}
     />
  </div>
)

export default Image;
