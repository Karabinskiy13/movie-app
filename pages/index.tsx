import React from 'react';
import Slider from 'react-slick';
import ScrollRight from '../public/images/scrollRight.svg';

import { Slide } from '../src/components/Slide/SlideItem';
import { moviesService } from '../src/services/movies.service';
import { Movie } from '../types';

import { CarouselStyled } from '../styles/Slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type SliderType = {
  nowPlayingMovies: Movie[];
};
type Arrow = {
  className?: string;
  style?: string;
  onClick?: () => void;
};

const HomeSlider = ({ nowPlayingMovies }: SliderType) => {
  const SampleNextArrow = ({ className, style, onClick }: Arrow) => {
    return (
      <ScrollRight
        hidden
        className={className}
        style={style}
        onClick={onClick}
        alt="scroll Right"
      />
    );
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
        {nowPlayingMovies &&
          nowPlayingMovies.slice(9, 13).map((movie) => <Slide key={movie.id} movie={movie} />)}
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
        nowPlayingMovies: data
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export default HomeSlider;
