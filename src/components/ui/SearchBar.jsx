import React, { Component } from 'react';

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

  render() {
    return (
      <input type="text"
        value={this.state.searchInput}
        onChange={this.updateInput.bind(this)} />
    );
  }
}

