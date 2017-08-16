import { stringify } from 'qs';

const postPath = ({ BASE_URL, id }) => {
  return `${BASE_URL}/posts/${id}`;
};

const postUrl = (postId = ':postId') => `/posts/${postId}`;

export { postPath, postUrl };
