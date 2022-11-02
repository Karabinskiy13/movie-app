/* eslint-disable react/jsx-key */
import React from 'react';

import { urls } from '../../src/constants';
import StarRatings from 'react-star-ratings';
import { GetServerSideProps } from 'next';
import { moviesService } from '../../src/services/movies.service';
import { GenresPropsType, MoviesType } from '../../types';
import GenresItem from '../../src/components/Genres/GenresItem';

type SingleMovieProps = {
  singleMovie: MoviesType;
};

const GetMovies = ({ singleMovie }: SingleMovieProps) => {
  const {
    poster_path,
    title,
    release_date,
    overview,

    vote_average,
    budget,
    revenue,
    vote_count,
    tagline,
    status,
    genres,
    backdrop_path
  } = singleMovie;

  console.log(singleMovie);
  return (
    <div
      style={{ backgroundImage: `url(${urls.img1280.concat(backdrop_path)})` }}
      className="movieInformation">
      <div className="aboutMovie">
        <div className="poster">
          <img src={urls.img342.concat(poster_path)} alt="Poster" />
          {/* <div className="posterGenres">
            {genres &&
              genres.map(({ genre }: { genre: GenresPropsType }) => <GenresItem genre={genre} />)}
          </div> */}
        </div>
        <div className="details">
          <div className="titleBadge">
            <h1>{title}</h1>
          </div>
          <h1 className={'releaseDate'}>({release_date && release_date.substring(0, 4)})</h1>
          <h3 className={'tagline'}>{tagline}</h3>
          <div className="stars">
            <StarRatings
              rating={vote_average}
              starDimension="20px"
              starSpacing="5px"
              starRatedColor="gold"
              numberOfStars={10}
              name="rating"
            />
            <p>({vote_count})</p>
          </div>
          <h3>{overview}</h3>
          {budget > 1 && (
            <div className="money">
              <h4>Status: {status}</h4>
              <h4>Budget: {budget} $</h4>
              <h4>Revenue: {revenue} $</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: any = context.params;

  const result = await moviesService.getMovie(id);
  const data = result.data;

  if (!data) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      singleMovie: data
    }
  };
};

export default GetMovies;
