import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => (
  <div className="card__image border-tlr-radius">
     <img
       src={props.image.src || Image.defaultProps.image.src }
       style={props.image.style || Image.defaultProps.image.style }
       alt={props.image.alt || Image.defaultProps.image.alt}
     />
  </div>
);

Image.defaultProps = {
  image: {
    src: 'http://www.pedalo.co.uk/wp-content/uploads/2016/07/My-Water-Filters-404-page.jpg',
    alt: 'No Image Provided',
    style: {width: 200, height: 200}
  }
};

Image.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    })
  })
};

export default Image;
