import React from 'react';
import { useDispatch } from 'react-redux';

import TopRatedMovie from '../../src/components/TopRatedMovie/TopRatedMovie';
import { moviesService } from '../../src/services/movies.service';
import { addToFavorites } from '../../src/store/favoritesSlice';

import { Movie } from '../../types';

type TopMovieProps = {
  topMovie: Movie[];
};

const TopRated = ({ topMovie }: TopMovieProps) => {
  const dispatch = useDispatch();
  const addFavorites = (topMovie: Movie) => {
    dispatch(addToFavorites(topMovie));
  };
  return (
    <div>
      {topMovie &&
        topMovie.map((topMovie) => (
          <TopRatedMovie
            key={topMovie.id}
            topMovie={topMovie}
            handle={() => addFavorites(topMovie)}
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
