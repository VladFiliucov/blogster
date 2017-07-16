import { connect } from 'react-redux';
import { fetchPosts } from 'actions/Posts';
import { withRouter } from 'react-router-dom';
import history from 'routes/history';
import { push } from 'react-router-redux';

import SearchBar from 'components/ui/SearchBar';

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: (searchTerm) => {
      dispatch(push({pathname: '/', search: searchTerm}));
    }
  };
}

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));
