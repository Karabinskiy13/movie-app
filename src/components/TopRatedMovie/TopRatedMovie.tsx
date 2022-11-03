import Link from 'next/link';
import React from 'react';
import { AboutMovie, Details, MovieStyle, OverView, Poster, Title } from '../../../styles/Movie';
import { MoviesType } from '../../../types';

import { urls } from '../../constants';

type TopMovieProps = {
  topMovie: MoviesType;
};

const TopRatedMovie = ({ topMovie }: TopMovieProps) => {
  const { backdrop_path, poster_path, release_date, id, overview, title } = topMovie;
  return (
    <div>
      <Link href={`/movie/${id}`} style={{ textDecoration: 'none' }}>
        <MovieStyle style={{ backgroundImage: `url(${urls.img1280.concat(backdrop_path)})` }}>
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
