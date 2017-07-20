import { connect } from 'react-redux';
import { fetchPosts } from 'actions/Posts';
import { withRouter } from 'react-router-dom';
import history from 'routes/history';
import { stringify } from 'qs';

import SearchBar from 'components/ui/SearchBar';

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: (searchTerm) => {
      history.push({pathname: '/', search: stringify({q: searchTerm})});
    }
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
