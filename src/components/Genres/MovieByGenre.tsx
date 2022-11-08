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
    : 'url(https://images.hdqwalls.com/download/dark-abstract-black-minimal-4k-q0-1280x800.jpg)';

  const poster = movie.poster_path
    ? `${urls.img1280.concat(movie.poster_path)}`
    : 'https://png.pngtree.com/png-vector/20190420/ourlarge/pngtree-question-mark-vector-icon-png-image_963326.jpg';

  return (
    <Link href={`/movie/${movie.id}`}>
      <MovieStyle style={{ backgroundImage: background }}>
        <AboutMovie>
          <Poster>
            <Image src={poster} alt={'poster'} width={342} height={513} />
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
