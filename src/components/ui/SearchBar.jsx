import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };
  }

  updateInput(e) {
    this.setState({ searchInput: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchPosts(this.state.searchInput);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          value={this.state.searchInput}
          onChange={this.updateInput.bind(this)} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchPosts: PropTypes.func
};

