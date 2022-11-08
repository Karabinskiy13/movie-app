/* eslint-disable no-constant-condition */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { AboutMovie, Details, MovieStyle, OverView, Poster, Title } from '../../../styles/Movie';
import { Movie } from '../../../types';
import { urls } from '../../constants';

export type MovieItem = {
  movie: Movie;
};

const MovieByGenre = ({ movie }: MovieItem) => {
  const background = movie.backdrop_path
    ? `url(${urls.img1280.concat(movie.backdrop_path)})`
    : 'none';
  return (
    <Link href={`/movie/${movie.id}`}>
      <MovieStyle style={{ backgroundImage: background }}>
        <AboutMovie>
          <Poster>
            <Image
              src={urls.img342.concat(movie.poster_path)}
              alt={'poster'}
              width={342}
              height={513}
            />
          </Poster>
          <Details>
            <Title>{movie.title}</Title>
            <h1>({movie.release_date && movie.release_date.substring(0, 4)})</h1>
            <OverView>{movie.overview}</OverView>
          </Details>
        </AboutMovie>
      </MovieStyle>
    </Link>
  );
};

export default MovieByGenre;
