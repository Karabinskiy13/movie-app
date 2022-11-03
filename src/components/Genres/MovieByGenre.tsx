import Link from 'next/link';
import React from 'react';
import { AboutMovie, Details, MovieStyle, OverView, Poster, Title } from '../../../styles/Movie';
import { MoviesType } from '../../../types';
import { urls } from '../../constants';

export type MovieItemProps = {
  movie: MoviesType;
};

const MovieByGenre = ({ movie }: MovieItemProps) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <MovieStyle style={{ backgroundImage: `url(${urls.img1280.concat(movie.backdrop_path)})` }}>
        <AboutMovie>
          <Poster>
            <img src={urls.img342.concat(movie.poster_path)} />
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
