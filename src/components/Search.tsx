import React, { useState } from "react";
import { Link } from "react-router-dom";
import {addToFav, viewFilm, removeFromFav} from '../toolkit/toolkitSlice';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../toolkit";


export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const SearchFilm: React.FC = () => {
 
  const [downloadStatus, setStatus] = useState('');
  const [title, setTitleValue] = useState('');
  const [films, setFilms] = useState<Movie[]>([]);
  const dispatch = useDispatch();
  const favFilms: Movie[] = useSelector((state: RootState) => state.toolkit.favorites);

  const getFilms = () => {
    setStatus('load');
    setFilms([]);
    fetch(`https://www.omdbapi.com/?apikey=64405bd2&s=${title}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data.Response === "True") {
      setFilms(data.Search);
      setStatus('');
    } else {
      setStatus('error');
    }
  })
  .catch(error => {
    setStatus('error')
    console.error('Произошла ошибка:', error);
  })
  }

  return (<>
    <div className="input-group">
    <div className="form-outline">
      <input 
      type="search" 
      id="form1" 
      className="form-control" 
      placeholder="Enter a film title..."
      value={title} onChange={(e) => setTitleValue(e.target.value)}/>
    </div>
    <button type="button" className="btn btn-primary search" onClick={getFilms}>
      Search
      <i className="fas fa-search"></i>
    </button>
    <Link to={'/favourites'}><button className="btn btn-primary fav-btn">Favourites</button></Link>
  </div>
  
  {downloadStatus === 'load' ? <button className="btn btn-primary" type="button" disabled>
    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button> : null}
  {downloadStatus === 'error' ? <div className="error">No results, try again!</div> : null}

  <div className="films">
  {films.map((film: Movie) => {
    const isFavorite = favFilms.some((favFilm) => favFilm.imdbID === film.imdbID);

    return (
      <div className="film" key={film.imdbID} onClick={() => dispatch(viewFilm(film.imdbID))}>
        <Link to={`/${film.Title}`}>
          <img src={film.Poster} alt={film.Title} />
          <div className="film-info">
            <div>{film.Title}</div>
            <div>{film.Year}</div>
            <div>{film.Type}</div>
          </div>
        </Link>
        <button className="fav btn btn-primary" onClick={() => (isFavorite ? dispatch(removeFromFav(film.imdbID)) : dispatch(addToFav(film)) )}>
          {isFavorite ? "Remove from Favourites" : "Add to Favourites"}
        </button>          
      </div>
    );
  })}
</div>
</>
)};

export default SearchFilm;
