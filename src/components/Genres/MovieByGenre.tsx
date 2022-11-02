import Link from 'next/link';
import React from 'react';
import { MoviesType } from '../../../types';
import { urls } from '../../constants';

export type MovieItemProps = {
  movie: MoviesType;
};

const MovieByGenre = ({ movie }: MovieItemProps) => {
  return (
    <div>
      <Link href={`/movie/${movie.id}`}>
        <div
          style={{ backgroundImage: `url(${urls.img1280.concat(movie.backdrop_path)})` }}
          className="movieInformation">
          <div className="aboutMovie">
            <div className="poster">
              <img src={urls.img342.concat(movie.poster_path)} alt="Poster" />
            </div>
            <div className="details">
              <div className="title">
                <h1>{movie.title}</h1>
              </div>
              <h1 className={'releaseDate'}>
                ({movie.release_date && movie.release_date.substring(0, 4)})
              </h1>
              <h3>{movie.overview}</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieByGenre;
