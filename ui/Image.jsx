import React from 'react';

const Image = (props) => (
  <div>
     <img
       src={props.imageAddress}
       style={props.style}
       alt={props.altText}
     />
  </div>
)

export default Image;
