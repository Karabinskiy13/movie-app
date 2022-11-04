import React from 'react';
import { GetServerSideProps } from 'next';

import MovieByGenre from '../../src/components/Genres/MovieByGenre';
import { genreService } from '../../src/services/genres.service';
import { Movie } from '../../types';
import { ParsedUrlQuery } from 'querystring';

type MoviesByGenre = {
  moviesByGenre: Movie[];
};
interface Params extends ParsedUrlQuery {
  id: string;
}

const MoviesByGenre = ({ moviesByGenre }: MoviesByGenre) => {
  return (
    <div>
      {moviesByGenre && moviesByGenre.map((movie) => <MovieByGenre key={movie.id} movie={movie} />)}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params;

  const result = await genreService.genreList(id, '1');
  const data = result.data.results;
  if (!data) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      moviesByGenre: data
    }
  };
};

export default MoviesByGenre;
