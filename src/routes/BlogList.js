import BlogPage from 'components/containers/BlogPage';
import { fetchPosts } from 'actions/Posts';

const BlogsRoute = {
  exact: true,
  path: '/',
  component: BlogPage,
  prepareData: (store, state) => (
    store.dispatch(fetchPosts())
  )
};

export default BlogsRoute;
