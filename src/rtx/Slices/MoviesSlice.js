import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const ApiKey = "c2dcaf2f3a554ec10655c3c18fc4a4f1";

export const getMovies = createAsyncThunk(
  "moviesSlice/getMovies",
  async (page) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=${page}`
    );
    const data = await res.json();

    return data.results;
  }
);
export const search = createAsyncThunk("moviesSlice/search", async (word) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${word}&language=en-US`
  );
  const data = await res.json();

  return data.results;
});

const moviesSlice = createSlice({
  initialState: [],
  name: "moviesSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(search.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
