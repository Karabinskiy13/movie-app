/* eslint-disable no-constant-condition */
import Link from 'next/link';
import React from 'react';
import { AboutMovie, Details, MovieStyle, OverView, Poster, Title } from '../../../styles/Movie';
import { Movie } from '../../../types';

import { urls } from '../../constants';

type TopMovie = {
  topMovie: Movie;
};

const TopRatedMovie = ({ topMovie }: TopMovie) => {
  const { poster_path, release_date, id, overview, title } = topMovie;

  return (
    <div>
      <Link href={`/movie/${id}`} style={{ textDecoration: 'none' }}>
        <MovieStyle
          style={{
            backgroundImage: topMovie.backdrop_path
              ? `url(${urls.img1280.concat(topMovie.backdrop_path)})`
              : 'url(https://images.hdqwalls.com/download/dark-abstract-black-minimal-4k-q0-1280x800.jpg)'
          }}>
          <AboutMovie>
            <Poster>
              <img src={urls.img342.concat(poster_path)} />
            </Poster>
            <Details>
              <Title>{title}</Title>
              <h1 className={'releaseDate'}>({release_date && release_date.substring(0, 4)})</h1>
              <OverView>{overview}</OverView>
            </Details>
          </AboutMovie>
        </MovieStyle>
      </Link>
    </div>
  );
};

export default TopRatedMovie;
