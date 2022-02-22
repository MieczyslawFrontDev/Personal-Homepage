import axios from "axios";

export const getRepositoriesFromApi = async () => {
  const repositoriesUrl =
    "https://api.github.com/users/MieczyslawFrontDev/repos";

  const response = await axios.get(repositoriesUrl);

  // const repositories = response.data;

  return response.data;
};
