import { stringify } from 'qs';

const postPath = ({ BASE_URL, id }) => {
  return `${BASE_URL}/posts/${id}`;
};

const postUrl = (postId = ':postId') => `/posts/${postId}`;
const editPostUrl = (postId = ':postId') => `/posts/${postId}/edit`;

export { postPath, postUrl, editPostUrl };
