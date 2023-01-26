/* eslint-disable no-constant-condition */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  AboutMovie,
  Details,
  FavoritesMovie,
  FavoritesButton,
  MovieStyle,
  OverView,
  Poster,
  Title
} from '../../../styles/Movie';

import { Movie } from '../../../types';

import { urls } from '../../constants';

type TopMovie = {
  topMovie: Movie;
  handle?: () => void;
};

const TopRatedMovie = ({ topMovie, handle }: TopMovie) => {
  const { poster_path, release_date, id, overview, title, backdrop_path } = topMovie;
  const background = backdrop_path
    ? `url(${urls.img1280.concat(backdrop_path)})`
    : 'url(https://images.hdqwalls.com/download/dark-abstract-black-minimal-4k-q0-1280x800.jpg)';

  const poster = poster_path
    ? `${urls.img1280.concat(poster_path)}`
    : 'https://png.pngtree.com/png-vector/20190420/ourlarge/pngtree-question-mark-vector-icon-png-image_963326.jpg';

  return (
    <div>
      <MovieStyle
        style={{
          backgroundImage: background
        }}>
        <Link href={`/movie/${id}`} style={{ textDecoration: 'none' }}>
          <AboutMovie>
            <Poster>
              <Image src={poster} alt={'poster'} width={342} height={513} />
            </Poster>
            <Details>
              <Title>{title}</Title>
              <h1 className={'releaseDate'}>({release_date && release_date.substring(0, 4)})</h1>
              <OverView>{overview}</OverView>
            </Details>
          </AboutMovie>
        </Link>
        <FavoritesMovie>
          <FavoritesButton onClick={() => handle?.()}>Add to Favorites</FavoritesButton>
        </FavoritesMovie>
      </MovieStyle>
    </div>
  );
};

export default TopRatedMovie;
