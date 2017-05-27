import React from 'react';

import BlogItem from './BlogItem';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BlogItem post={post1} />
        <BlogItem post={post2}/>
        <BlogItem post={post3}/>
      </div>
    );
  }
}

export default BlogList;
