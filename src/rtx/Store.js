import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./Slices/MoviesSlice";
import MoviesDetailsSlice from "./Slices/MoviesDetailsSlice";

export const store = configureStore({
  reducer: {
    movies: MovieSlice,
    details: MoviesDetailsSlice,
  },
});
