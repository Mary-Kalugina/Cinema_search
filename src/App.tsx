import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchFilm from './components/Search'; 
import Favourites from './components/Favourites';
import Film from './components/Film';

const App: React.FC = () => {
  
  return (
    <Routes>
        <Route path="/" element={<SearchFilm />} />
        <Route path="/:title" element={<Film />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>      
  );
};

export default App;
