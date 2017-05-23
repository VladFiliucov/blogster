import React, { Component } from 'react';

import BlogItem from '../ui/BlogItem';

export default class BlogList extends Component {
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

