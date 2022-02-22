import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
  name: "homepage",
  initialState: {
    repositories: null,
    status: "initial",
  },

  reducers: {
    axiosGetRepositories: () => ({
      status: "loading",
      repositories: null,
    }),
    axiosGetRepositoriesSuccess: (_,{ payload: repositories }) => ({
      status: "success",
      repositories,
    }),
    axiosGetRepositoriesError: () => ({
      status: "error",
      repositories: null,
    }),
  },
});


export const { axiosGetRepositories, axiosGetRepositoriesSuccess, axiosGetRepositoriesError } =
  homepageSlice.actions;

const selectHomepageState = state => state.homepage;

export const selectRepositories = state => selectHomepageState(state).repositories;
export const selectRepositoriesStatus = state => selectHomepageState(state).status

export const homepageReducer =  homepageSlice.reducer;