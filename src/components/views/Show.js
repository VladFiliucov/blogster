import React from 'react';

import Helmet from 'react-helmet';

import BlogShow from 'components/ui/BlogShow';
import PropTypes from 'prop-types';

const Show = (props) => (
  <div>
    <BlogShow {...props} />
    {
      props.post
      && <Helmet title={props.post.text} />
    }
  </div>
);

Show.propTypes = BlogShow.propTypes;

export default Show;
