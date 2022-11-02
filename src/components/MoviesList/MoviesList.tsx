import Link from 'next/link';
import React from 'react';
import { MoviesType } from '../../../types';

import { urls } from '../../constants/urls';

import './Movies.css';

type MoviesListProps = {
  movie: MoviesType;
};

const MoviesList = ({ movie }: MoviesListProps) => {
  const { poster_path, id, overview } = movie;

  const background = `url(${urls.img185.concat(poster_path)})`;
  return (
    <div className="movie">
      <Link href={`/movie/${id}`} style={{ textDecoration: 'none' }}>
        <div style={{ backgroundImage: background }} className="movieInfo">
          <div className="info">
            <div className="overview">{overview}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MoviesList;
