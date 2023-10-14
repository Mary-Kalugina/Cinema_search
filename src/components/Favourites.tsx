import React from "react";
import { Link } from "react-router-dom";
import {removeFromFav} from '../toolkit/toolkitSlice.js';
import { useDispatch, useSelector } from "react-redux";
import { Movie } from "./Search.js";
import { RootState } from "../toolkit";

const Favourites: React.FC = () => {
  
  const favFilms = useSelector((state: RootState) => state.toolkit.favorites);
  const dispatch = useDispatch();

  if (favFilms.length === 0) {
    return (
      <h3>No films in favourites</h3>
    )
  }

  return (
    <div className="films">
      {Array.from(favFilms).map((film: Movie) => (
    <div className="film" key={film.imdbID}>
      <Link to={`/${film.Title}`}>
      <img src={film.Poster}/>
      <div className="film-info">
        <h4>{film.Title}</h4>
        <div>{film.Year}</div>
        <div>{film.Type}</div>
      </div>
      </Link>
      <button className="fav btn btn-primary" onClick={() => dispatch(removeFromFav(film.imdbID))}>Remove from favourite</button>
    </div>
  ))
  }
    </div>
  )
};

export default Favourites;
