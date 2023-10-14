import React, {useEffect, useState} from "react";
// import {removeFromFav} from '../toolkit/toolkitSlice.js';
import { useSelector } from "react-redux";
import { RootState } from "../toolkit";


interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

const Film: React.FC = () => {

  const filmId: string = useSelector((state: RootState) => state.toolkit.filmId);
  const [film, setFilm] = useState<Movie | null>(null);

  useEffect(() => {
      fetch(`https://www.omdbapi.com/?apikey=64405bd2&i=${filmId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.Response === "True") {
        setFilm(data);
      }
    })
    .catch(error => {
      console.error('Произошла ошибка:', error);
    })
    }, [])
   
    if (!film) {
      return <button className="btn btn-primary" type="button" disabled>
      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      Loading...
    </button>
    }  

  return (
       <div className="film-page">
        <img src={film.Poster} />
        <h2>{film.Title}</h2>
        <ul>
        <li>
        <strong>Year:</strong> {film.Year}
      </li>
      <li>
        <strong>Genre:</strong> {film.Genre}
      </li>
      <li>
        <strong>Runtime:</strong> {film.Runtime}
      </li>
      <li>
        <strong>Director:</strong> {film.Director}
      </li>
      <li>
        <strong>Actors:</strong> {film.Actors}
      </li>
      <li>
        <strong>imdbRating:</strong> {film.imdbRating}
      </li>
        </ul>
       </div>
  );
}
export default Film;
