import axios from "axios";

export const getRepositoriesFromApi = () => {
  axios
    .get("https://api.github.com/users/MieczyslawFrontDev/repos")
    .then((response) => response.data);
};