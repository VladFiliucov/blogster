const postsPath = ({ BASE_URL, searchTerm }) => {
  let searchParam = '';

  if (searchTerm) {
    searchParam = `?search=${searchTerm.slice(1)}`;
  }

  return `${BASE_URL}/posts${searchTerm ? searchParam : ''}`;
};

export { postsPath };
