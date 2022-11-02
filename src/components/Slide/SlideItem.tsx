import Link from 'next/link';
import React from 'react';
import StarRatings from 'react-star-ratings';
import useSWR, { Fetcher, Key } from 'swr';
import { GenresProps } from '../../../pages/genres';

import { urls } from '../../constants';
import { genreService } from '../../services/genres.service';
import { MovieItemProps } from '../Genres/MovieByGenre';

export const Slide = ({ movie }: MovieItemProps, { genres }: GenresProps) => {
  const { data, error } = useSWR(genreService.allGenres(), fetcher);
  console.log(data);
  const { original_title, overview, id, vote_average, backdrop_path } = movie;

  const filteredGenre = genres.find((genre) => genre.id === movie.genre_ids[0]);
  console.log(filteredGenre);

  return (
    <div
      style={{ backgroundImage: `url(${urls.img1280.concat(backdrop_path)})` }}
      className={'carouselSlide'}>
      <div className="carouselInfo">
        <div className="genreBadge"></div>
        <h1>{original_title}</h1>
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
        <p className="info">{overview}</p>
        <Link href={`/movie/${id}`}>
          <button className={'carouselBtn'}>More Details</button>
        </Link>
      </div>
    </div>
  );
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());
// export const getStaticProps = async () => {
//   try {
//     const result = await genreService.allGenres();
//     const data = result.data.genres;
//     console.log(data);

//     return {
//       props: {
//         genres: data
//       }
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };
