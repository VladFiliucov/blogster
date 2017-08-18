import React from 'react';
import BlogShow from 'components/ui/BlogShow';
import PropTypes from 'prop-types';

const Show = (props) => (
  <div>
    <BlogShow {...props} />
  </div>
);

Show.propTypes = BlogShow.propTypes;

export default Show;
