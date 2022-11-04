import React from 'react';

import TopRatedMovie from '../../src/components/TopRatedMovie/TopRatedMovie';
import { moviesService } from '../../src/services/movies.service';

import { Movie } from '../../types';
import { SearchStyle } from '../../styles/Search';

const Search = () => {
  let timeout: NodeJS.Timeout;
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchMovie, setSearchMovie] = React.useState<Movie[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const fetch = async () => {
      const movies = await moviesService.searchMovie(`${searchTerm}`);
      if (movies) {
        setSearchMovie(movies.results);
      }
    };
    timeout = setTimeout(() => fetch(), 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchTerm]);
  return (
    <div>
      <SearchStyle type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
      {searchMovie && searchMovie.map((movie) => <TopRatedMovie key={movie.id} topMovie={movie} />)}
    </div>
  );
};

export default Search;
