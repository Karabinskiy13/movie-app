import React from 'react';
import Link from 'next/link';
import StarRatings from 'react-star-ratings';

import { urls } from '../../constants';
import { MovieItem } from '../Genres/MovieByGenre';
import {
  CarouselButton,
  CarouselHeader,
  CarouselInfo,
  CarouselSlide,
  CarouselText
} from '../../../styles/Slider';

export const Slide = ({ movie }: MovieItem) => {
  const { original_title, overview, id, vote_average, backdrop_path } = movie;

  return (
    <CarouselSlide style={{ backgroundImage: `url(${urls.img1280.concat(backdrop_path)})` }}>
      <CarouselInfo>
        <CarouselHeader>{original_title}</CarouselHeader>
        <div className="rating">
          <StarRatings
            rating={vote_average}
            starDimension="20px"
            starSpacing="5px"
            starRatedColor="gold"
            numberOfStars={10}
            name="rating"
          />
        </div>
        <CarouselText>{overview}</CarouselText>
        <Link href={`/movie/${id}`}>
          <CarouselButton>More Details</CarouselButton>
        </Link>
      </CarouselInfo>
    </CarouselSlide>
  );
};
