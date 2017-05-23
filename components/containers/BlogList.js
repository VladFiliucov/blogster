import React from 'react';

import BlogItem from '../ui/BlogItem';

const style = {width: 200, height: 200}
const imageURL = "https://s-media-cache-ak0.pinimg.com/736x/8b/d1/b8/8bd1b8b02e9cb633adb1d789dd4588c6.jpg"
const altText= "Guy rides a co...grown chicken"
const text = "Lorem ipsum could be here"

class BlogList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BlogItem imageURL={imageURL} style={style} altText={altText} text={text} />
        <BlogItem imageURL={imageURL} style={style} altText={altText} text={text} />
        <BlogItem imageURL={imageURL} style={style} altText={altText} text={text} />
      </div>
    );
  }
}

export default BlogList;
