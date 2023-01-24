import React, { useContext } from 'react';

import TopRatedMovie from '../../src/components/TopRatedMovie/TopRatedMovie';
import { FavoritesContext } from '../../src/context/favoritesContext';
import { moviesService } from '../../src/services/movies.service';
import { Movie } from '../../types';

type TopMovieProps = {
  topMovie: Movie[];
};

const TopRated = ({ topMovie }: TopMovieProps) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
  console.log(favorites);
  return (
    <div>
      {topMovie &&
        topMovie.map((topMovie) => (
          <TopRatedMovie
            key={topMovie.id}
            topMovie={topMovie}
            handle={() => addToFavorites({ topMovie })}
          />
        ))}
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const result = await moviesService.getTopRatedMovies();
    const data = result.data.results;

    return {
      props: {
        topMovie: data
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export default TopRated;
