import BlogsRoute from 'routes/BlogList';
import BlogRoute from 'routes/Blog';
import AboutRoute from 'routes/About';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

export default () => ([
  AboutRoute,
  BlogsRoute,
  BlogRoute
]);

