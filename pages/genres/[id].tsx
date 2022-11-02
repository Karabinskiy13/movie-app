/* eslint-disable react/prop-types */
import React from 'react';
import MovieByGenre from '../../src/components/Genres/MovieByGenre';
import { GetServerSideProps } from 'next';
import { genreService } from '../../src/services/genres.service';
import { MoviesType } from '../../types';

type MoviesByGenreProps = {
  moviesByGenre: MoviesType[];
};

const MoviesByGenre = ({ moviesByGenre }: MoviesByGenreProps) => {
  return (
    <div>
      {moviesByGenre && moviesByGenre.map((movie) => <MovieByGenre key={movie.id} movie={movie} />)}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: any = context.params;

  const result = await genreService.genreList(id, '1');
  const data = result.data.results;
  console.log(data);

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
