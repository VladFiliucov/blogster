import React from 'react';

import BlogItem from './BlogItem';

export default class BlogList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.posts.map(post => {
            return <BlogItem key={post.id} post={post} />
          })
        }
      </div>
    );
  }
}
