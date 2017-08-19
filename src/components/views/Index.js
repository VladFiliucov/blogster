import React from 'react';

import Helmet from 'react-helmet';

import BlogPage from 'components/ui/BlogPage';
import PropTypes from 'prop-types';

const Index = (props) => (
  <div>
    <BlogPage {...props} />
    <Helmet
      title='Blog records'
    />
  </div>
);

Index.propTypes = BlogPage.propTypes;

export default Index;
