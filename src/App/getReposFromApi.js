import axios from "axios";

export const getRepositoriesFromApi = async () => {
  const response = await axios.get(
    "https://api.github.com/users/MieczyslawFrontDev/repos"
  );

  const repositories = response.data;
  console.log(repositories);
  return await repositories;
};
