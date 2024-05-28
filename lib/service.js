import axios from "axios";

const getData = async (userId) => {
  const { data: user } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const { data: posts } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  return {
    user,
    posts,
  };
};

export default getData;
