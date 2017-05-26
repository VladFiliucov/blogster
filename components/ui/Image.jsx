import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => (
  <div>
     <img
       src={props.image.src}
       style={props.image.style}
       alt={props.image.alt}
     />
  </div>
)

Image.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    })
  })
}

export default Image;
