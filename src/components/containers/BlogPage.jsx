import React, { Component } from 'react';
import moment from 'moment';
import update from 'immutability-helper';

import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';
import posts from '../../constants/static/posts';

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts
    }
    this.incrementLikes = this.incrementLikes.bind(this)
  }

  incrementLikes(postId) {
    const { posts } = this.state;
    const postIndex = posts.findIndex(post => post.id == postId)

    if (postIndex > -1) {
      const post = posts[postIndex]
      const updatedPost = update(post, {
        details: {likes: {$set: {post.details.likes + 1}}}
      })

      this.setState({
        posts: posts
          .slice(0, postIndex)
          .concat(updatedPost)
          .concat(posts.slice(postIndex + 1))
      })
    }
  }

  render() {
    return (
      <div>
        <BlogList posts={this.state.posts} incrementLikes={this.incrementLikes} />
        <PieChart columns={[ ...this.state.posts.map(post => [post.text, post.details.likes]) ]} />
      </div>
    );
  }
}

