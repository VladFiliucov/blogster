import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  updateSearchTerm(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchPosts(this.state.searchTerm, e);
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit.bind(this) } >
          <TextField
            hintText="What do you want to find?"
            floatingLabelText="Search by title"
            value={ this.state.searchTerm }
            onChange={ this.updateSearchTerm }
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchPosts: PropTypes.func
};

