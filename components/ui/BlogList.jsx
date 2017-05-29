import React from 'react';

import BlogItem from './BlogItem';

export default class BlogList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { posts, incrementLikes } = this.props

    return (
      <div>
        {
          posts.map(post => <BlogItem
            key={post.id}
            post={post}
            incrementLikes={incrementLikes} />)
        }
      </div>
    );
  }
}

