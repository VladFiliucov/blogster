import { connect } from 'react-redux';
import { fetchPosts } from 'actions/Posts';
import history from 'routes/history';

import SearchBar from 'components/ui/SearchBar';

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: (searchTerm) => {
      dispatch(fetchPosts(searchTerm));
      history.push({pathname: '/', search: searchTerm});
    }
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
