import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  updateInput(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={ (e) => this.props.searchPosts(this.state.searchTerm, e) }>
          <input type="text"
            value={this.state.searchInput}
            onChange={this.updateInput.bind(this)} />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchPosts: PropTypes.func
};

