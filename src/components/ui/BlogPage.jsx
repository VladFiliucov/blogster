import React, { Component } from 'react';
import update from 'immutability-helper';

import { SERVER_ENDPOINT } from 'constants/static/env';

import BlogList from 'components/ui/BlogList';
import PieChart from 'components/ui/PieChart';
import SearchBar from 'components/ui/SearchBar';
import Spinner from 'components/ui/shared/Spinner';

import { postsPath } from 'helpers/routes/posts.js'

import 'components/styles/application/Base.css';
import 'components/styles/blog/BlogPage.css';

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(this.props.posts);
    this.props.likePost(this.props.posts, "2")
  }

  render() {
    return (
      <div className="container">
        { this.props.isLoading && <Spinner /> }
        { this.props.error && <h1>Something wrong with {this.props.error}</h1> }
        {
          !this.props.isLoading && !this.props.error &&
            <div className="item column1">
              <button onClick={this.handleClick}>
                Like!
              </button>
              <BlogList posts={this.props.posts} likePost={this.props.likePost} />
            </div>
        }
            <div className="item column2">
              <SearchBar searchPosts={ this.searchPosts } {...this.props} />
              <PieChart
                columns={[ ...this.props.posts
                  .map(post => [post.text, post.details.likes]) ]} />
            </div>
      </div>
    );
  }
}

