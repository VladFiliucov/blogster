const postPath = ({ BASE_URL, id }) => {
  return `${BASE_URL}/posts/${id}`;
};

const postUrlObject = (postId) => (
  {
    pathname: '/posts',
    search: `postId=${postId}`
  }
);

export { postPath, postUrlObject };
