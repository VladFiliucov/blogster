import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchPosts(this.refs.search.value, e);
    this.refs.search.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input type="text" ref='search' />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchPosts: PropTypes.func
};

