import React from 'react';
import { GetServerSideProps } from 'next';
import StarRatings from 'react-star-ratings';

import { urls } from '../../src/constants';
import { moviesService } from '../../src/services/movies.service';
import { Movie } from '../../types';

import {
  AboutMovie,
  Details,
  Money,
  MovieStyle,
  Poster,
  ReleaseData,
  StarsStyle,
  TitleBadge,
  TitleBadgeHeader
} from '../../styles/Movie';
import { ParsedUrlQuery } from 'querystring';

type SingleMovie = {
  singleMovie: Movie;
};
interface Params extends ParsedUrlQuery {
  id: string;
}

const GetMovies = ({ singleMovie }: SingleMovie) => {
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
    backdrop_path
  } = singleMovie;

  return (
    <MovieStyle style={{ backgroundImage: `url(${urls.img1280.concat(backdrop_path)})` }}>
      <AboutMovie>
        <Poster>
          <img src={urls.img342.concat(poster_path)} />
        </Poster>
        <Details>
          <TitleBadge>
            <TitleBadgeHeader>{title}</TitleBadgeHeader>
          </TitleBadge>
          <ReleaseData>({release_date && release_date.substring(0, 4)})</ReleaseData>
          <h3>{tagline}</h3>
          <StarsStyle>
            <StarRatings
              rating={vote_average}
              starDimension="20px"
              starSpacing="5px"
              starRatedColor="gold"
              numberOfStars={10}
              name="rating"
            />
            <p>({vote_count})</p>
          </StarsStyle>
          <h3>{overview}</h3>
          {budget > 1 && (
            <Money>
              <h4>Status: {status}</h4>
              <h4>Budget: {budget} $</h4>
              <h4>Revenue: {revenue} $</h4>
            </Money>
          )}
        </Details>
      </AboutMovie>
    </MovieStyle>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params;

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
