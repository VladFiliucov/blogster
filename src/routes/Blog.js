import React from 'react';

import BlogShow from 'components/containers/BlogShow';

const BlogRoute = {
  exact: true,
  path: '/posts/:postId',
  render: ({match}) => (
    <BlogShow postId={match.params.postId} />
  )
};

export default BlogRoute;
