import Link from 'next/link';
import React from 'react';
import { MoviesType } from '../../../types';

import { urls } from '../../constants';

type TopMovieProps = {
  topMovie: MoviesType;
};

const TopRatedMovie = ({ topMovie }: TopMovieProps) => {
  const { backdrop_path, poster_path, release_date, id, overview } = topMovie;
  return (
    <div>
      <Link href={`/movie/${id}`} style={{ textDecoration: 'none' }}>
        <div
          style={{ backgroundImage: `url(${urls.img1280.concat(backdrop_path)})` }}
          className="movieInformation">
          <div className="aboutMovie">
            <div className="poster">
              <img src={urls.img342.concat(poster_path)} alt="Poster" />
            </div>
            <div className="details">
              <div>{overview}</div>
              <h1 className={'releaseDate'}>({release_date && release_date.substring(0, 4)})</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TopRatedMovie;
