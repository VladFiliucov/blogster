import React, { Component } from 'react';
import update from 'immutability-helper';
import axios from 'axios';

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
    this.state = {
      posts: [],
      isLoading: true,
      error: ''
    };
    this.incrementLikes = this.incrementLikes.bind(this);
    this.searchPosts = this.searchPosts.bind(this);
  }

  incrementLikes(postId) {
    const { posts } = this.state;
    const postIndex = posts.findIndex(post => post.id == postId);

    if (postIndex > -1) {
      const post = posts[postIndex];
      const updatedPost = update(post, {
        details: {likes: {$set: (post.details.likes + 1)}}
      });

      this.setState({
        posts: posts
          .slice(0, postIndex)
          .concat(updatedPost)
          .concat(posts.slice(postIndex + 1))
      });
    }
  }

  fetchPosts(searchTerm) {
    const querryObject = { BASE_URL: SERVER_ENDPOINT, searchTerm  };

    axios.get(postsPath(querryObject))
      .then(response => {
        this.setState({
          posts: response.data,
          isLoading: false,
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          isLoading: false
        });
      });
  }

  searchPosts(searchTerm, e) {
    e.preventDefault();
    this.fetchPosts(searchTerm);
    this.props.history.push({pathname: '/', search: searchTerm});
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    return (
      <div className="container">
        { this.state.isLoading && <Spinner /> }
        { this.state.error && <h1>Something wrong with {this.state.error}</h1> }
        {
          !this.state.isLoading && !this.state.error &&
            <div className="item column1">
              <BlogList posts={this.state.posts}
                incrementLikes={this.incrementLikes} />
            </div>
        }
            <div className="item column2">
              <SearchBar searchPosts={ this.searchPosts } {...this.props} />
              <PieChart
                columns={[ ...this.state.posts
                  .map(post => [post.text, post.details.likes]) ]} />
            </div>
      </div>
    );
  }
}

