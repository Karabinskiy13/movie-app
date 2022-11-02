/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import Slider from 'react-slick';
import ScrollRight from '../public/images/scrollRight.svg';

import { Slide } from '../src/components/Slide/SlideItem';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { moviesService } from '../src/services/movies.service';

const HomeSlider = ({ nowPlayMovies }: any) => {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={style}
        onClick={onClick}
        src={ScrollRight}
        alt="scroll Right"
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <SampleNextArrow />
  };
  return (
    <div>
      <div className="carousel">
        <Slider {...settings}>
          {nowPlayMovies &&
            nowPlayMovies.slice(9, 13).map((movie: any) => <Slide key={movie.id} movie={movie} />)}
        </Slider>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const result = await moviesService.getTopRatedMovies();
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
