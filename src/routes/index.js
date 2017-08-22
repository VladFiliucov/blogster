import BlogsRoute from 'routes/BlogList';
import BlogRoute from 'routes/Blog';
import EditPostRoute from 'routes/EditPost';
import AboutRoute from 'routes/About';
import ContactRoute from 'routes/Contact';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

export default () => ([
  AboutRoute,
  ContactRoute,
  EditPostRoute,
  BlogRoute,
  BlogsRoute
]);

