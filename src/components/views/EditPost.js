import React from 'react';

import Helmet from 'react-helmet';

import BlogEdit from 'components/ui/BlogEdit';
import PropTypes from 'prop-types';

const EditPost = (props) => (
  <div>
    <BlogEdit {...props} />
    {
      props.post
      && <Helmet title={'Edit ' + props.post.text} />
    }
  </div>
);

EditPost.propTypes = BlogEdit.propTypes;

export default EditPost;
