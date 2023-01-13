import React from 'react';

import TopRatedMovie from '../../src/components/TopRatedMovie/TopRatedMovie';
import { moviesService } from '../../src/services/movies.service';

import { Movie } from '../../types';

type TopMovieProps = {
  topMovie: Movie[];
};

const TopRated = ({ topMovie }: TopMovieProps) => {
  return (
    <div>
      {topMovie &&
        topMovie.map((topMovie) => <TopRatedMovie key={topMovie.id} topMovie={topMovie} />)}
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
