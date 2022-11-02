import React, { useEffect, useState } from 'react';

import SearchButton from '../../images/search.svg';
import MoviesList from '../../src/components/MoviesList/MoviesList';
import { MoviesType } from '../../types';

type SearchProps = {
  searchMovies: {
    results: MoviesType;
  };
};

export const Search = ({ searchMovies }: SearchProps) => {
  const { results } = searchMovies;

  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = people.filter((person) => person.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="App">
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
      <ul>
        {searchResults.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
