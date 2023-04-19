import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiKey } from "./MoviesSlice";

export const movieDetails = createAsyncThunk(
  "movieDetailsSlice/movieDetails",
  async (movieId) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApiKey}&language=en-US`
    );
    const data = await res.json();

    return data;
  }
);

const detailsSlice = createSlice({
  initialState: [],
  name: "movieDetailsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(movieDetails.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = detailsSlice.actions;

export default detailsSlice.reducer;
