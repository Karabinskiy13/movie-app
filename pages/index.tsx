/* eslint-disable react/prop-types */
import React from 'react';
import Slider from 'react-slick';
import ScrollRight from '../public/images/scrollRight.svg';

import { Slide } from '../src/components/Slide/SlideItem';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { moviesService } from '../src/services/movies.service';
import { CarouselStyled } from '../styles/Slider';
import { MoviesType } from '../types';

type SliderProps = {
  nowPlayMovies: MoviesType[];
};
type ArrowProps = {
  className?: string;
  style?: string;
  onClick?: () => void;
};

const HomeSlider = ({ nowPlayMovies }: SliderProps) => {
  const SampleNextArrow = ({ className, style, onClick }: ArrowProps) => {
    return <ScrollRight className={className} style={style} onClick={onClick} alt="scroll Right" />;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />
  };
  return (
    <CarouselStyled className="carousel">
      <Slider {...settings}>
        {nowPlayMovies &&
          nowPlayMovies.slice(9, 13).map((movie: any) => <Slide key={movie.id} movie={movie} />)}
      </Slider>
    </CarouselStyled>
  );
};

export const getStaticProps = async () => {
  try {
    const result = await moviesService.getMoviesPlayingNow();
    const data = result.data.results;

    return {
      props: {
        nowPlayMovies: data
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export default HomeSlider;
