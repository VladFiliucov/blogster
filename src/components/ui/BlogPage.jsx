import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import { SERVER_ENDPOINT } from 'constants/static/env';

import BlogList from 'components/ui/BlogList';
import PieChart from 'components/ui/PieChart';
import SearchBar from 'components/ui/SearchBar';
import Spinner from 'components/ui/shared/Spinner';

import { postsPath } from 'helpers/routes/posts'

import 'components/styles/application/Base.css';
import 'components/styles/blog/BlogPage.css';

const searchPosts = () => (
  console.log("search posts")
);

const BlogPage = (props) => (
  <div className="container">
    { props.isLoading && <Spinner /> }
    { props.error && <h1>Something wrong with {props.error}</h1> }
    {
      !props.isLoading && !props.error &&
        <div className="item column1">
          <BlogList posts={props.posts} />
        </div>
    }
    <div className="item column2">
      <SearchBar searchPosts={ this.searchPosts } {...props} />
      <PieChart
        columns={[ ...props.posts
          .map(post => [post.text, post.details.likes]) ]} />
      </div>
    </div>
);

BlogPage.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  posts: PropTypes.array
};

export default BlogPage;
