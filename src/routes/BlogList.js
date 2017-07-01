import BlogPage from 'components/containers/BlogPage';
import { fetchPosts } from 'actions/Posts';

const BlogsRoute = {
  exact: true,
  path: '/',
  component: BlogPage,
  prepareData: (store, state) => {
    if (state.location.search) {
      store.dispatch(fetchPosts(state.location.search))
    } else {
      store.dispatch(fetchPosts())
    }
  }
};

export default BlogsRoute;
