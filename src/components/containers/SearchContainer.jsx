import { connect } from 'react-redux';
import { fetchPosts } from 'actions/Posts';

import SearchBar from 'components/ui/SearchBar';

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: (searchTerm) => dispatch(fetchPosts(searchTerm))
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
