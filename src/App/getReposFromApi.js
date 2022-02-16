import axios from "axios";

export const getRepositoriesFromApi = async () => {
  const response = await axios.get(
    "https://api.github.com/users/MieczyslawFrontDev/repos"
  );

  const repositories = await response.data;
  console.log(repositories);
  return repositories;
};
