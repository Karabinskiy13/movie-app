import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { FavoritesMovie, FavoritesButton } from '../../../styles/Movie';

import { Movie } from '../../../types';

import { urls } from '../../constants';
import { FavoritesPoster } from '../../../styles/Favorites';

export type FavoriteMovieProps = {
  favoriteFilm: Movie;
  handle?: () => void;
};

const FavoriteFilm = ({ favoriteFilm, handle }: FavoriteMovieProps) => {
  const { poster_path, id, title } = favoriteFilm;
  const poster = poster_path
    ? `${urls.img1280.concat(poster_path)}`
    : 'https://png.pngtree.com/png-vector/20190420/ourlarge/pngtree-question-mark-vector-icon-png-image_963326.jpg';

  return (
    <div>
      <Link href={`/movie/${id}`} style={{ textDecoration: 'none' }}>
        <FavoritesPoster>
          <Image src={poster} alt={'poster'} width={342} height={513} />
        </FavoritesPoster>
        <FavoritesMovie>
          <FavoritesButton style={{ marginBottom: '-200px' }} onClick={() => handle?.()}>
            Remove from favorites
          </FavoritesButton>
        </FavoritesMovie>
      </Link>
    </div>
  );
};

export default FavoriteFilm;
