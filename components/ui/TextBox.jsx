import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({children}) => <span> { children } </span>;

TextBox.defaultProps = {
  children: "Author didn't bother to provide text for this."
}

TextBox.propTypes = {
  children: PropTypes.string.isRequired
}

export default TextBox;
