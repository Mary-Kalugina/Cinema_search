import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../components/Search";

interface ToolkitState {
  favorites: Movie[];
  filmId: string;
}

const initialState: ToolkitState = {
  favorites: [],
  filmId: ''
};

const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState,
  reducers: {
    addToFav(state, action: PayloadAction<Movie>) {
      // Проверяем, есть ли фильм с таким imdbID уже в избранном
      const isDuplicate = state.favorites.some(film => film.imdbID === action.payload.imdbID);

      if (!isDuplicate) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFav(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter((film) => film.imdbID !== action.payload);
    },
    viewFilm(state, action: PayloadAction<string>) {
      state.filmId = action.payload;
    }
  }
});

export default toolkitSlice.reducer;
export const { addToFav, removeFromFav, viewFilm } = toolkitSlice.actions;
