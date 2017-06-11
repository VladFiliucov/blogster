import React from 'react';
import PropTypes from 'prop-types';

import BlogItem from 'components/ui/BlogItem';

const BlogList = (props) => (
  <div>
    {
      props.posts.map(post => <BlogItem
        key={post.id}
        post={post}
        incrementLikes={props.incrementLikes} />)
    }
  </div>
);

BlogList.propTypes = {
  posts: PropTypes.array,
  incrementLikes: PropTypes.func
};

export default BlogList;

