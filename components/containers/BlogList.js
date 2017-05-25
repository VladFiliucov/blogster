import React from 'react';

import BlogItem from '../ui/BlogItem';

const post1 =  {
  id: 1,
  src: "https://s-media-cache-ak0.pinimg.com/736x/8b/d1/b8/8bd1b8b02e9cb633adb1d789dd4588c6.jpg",
  alt: "Who cares",
  text: "This is an awesome blogpost 1",
  style: {width: 200, height: 200}
}

const post2 =  {
  id: 2,
  src: "https://s-media-cache-ak0.pinimg.com/736x/8b/d1/b8/8bd1b8b02e9cb633adb1d789dd4588c6.jpg",
  alt: "Who cares",
  text: "This is an awesome blogpost 2",
  style: {width: 200, height: 200}
}

const post3 =  {
  id: 3,
  src: "https://s-media-cache-ak0.pinimg.com/736x/8b/d1/b8/8bd1b8b02e9cb633adb1d789dd4588c6.jpg",
  alt: "Who cares",
  text: "This is an awesome blogpost 3",
  style: {width: 200, height: 200}
}

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
