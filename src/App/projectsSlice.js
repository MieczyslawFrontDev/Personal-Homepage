import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  state: {
    repositories: null,
    status: initial,
  },

  reducers: {
    axiosRepos: () => ({
      status: "laoding",
      repositories: null,
    }),
    axiosReposSuccess: ({ payload: repositories }) => ({
      status: "success",
      repositories,
    }),
    axiosReposError: () => ({
      status: "error",
      repositories: null,
    }),
  },
});

export const { axiosRepos, axiosReposSuccess, axiosReposError } =
  projectsSlice.actions;

export default projectsSlice.reducer;
