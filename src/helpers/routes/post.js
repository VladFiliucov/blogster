import { stringify } from 'qs';

const postPath = ({ BASE_URL, id }) => {
  return `${BASE_URL}/posts/${id}`;
};

const postUrlObject = (postId) => (
  {
    pathname: '/posts',
    search: stringify(postId)
  }
);

export { postPath, postUrlObject };
