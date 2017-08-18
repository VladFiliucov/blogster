import React from 'react';
import BlogPage from 'components/ui/BlogPage';
import PropTypes from 'prop-types';

const Index = (props) => (
  <div>
    <BlogPage {...props} />
  </div>
);

Index.propTypes = {
  props: BlogPage.propTypes
};

export default Index;
