import React from 'react';

import BlogItem from '../ui/BlogItem';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    );
  }
}

export default BlogList;
