import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
import { Movie } from "../components/Search";

const rootReducer = combineReducers(
   { toolkit: toolkitSlice} 
);

export const store = configureStore( {
    reducer: rootReducer
});

export type RootState = {
    toolkit: {
      favorites: Set<Movie>;
      filmId: string
    };
  };