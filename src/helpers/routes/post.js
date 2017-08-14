import { stringify } from 'qs';

const postPath = ({ BASE_URL, id }) => {
  return `${BASE_URL}/posts/${id}`;
};

const postUrlObject = (postId) => (
  {
    pathname: '/post',
    search: stringify(postId)
  }
);

export { postPath, postUrlObject };
