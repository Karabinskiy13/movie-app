import { MoviesType } from '../../types';
import { urls } from '../constants';
import axiosService from './axios.service';

interface GetMoviesResponse {
  page: number;
  results: MoviesType[];
}
interface GetMovieResponse {
  id: number;
  page: number;
  results: MoviesType[];
}

export const moviesService = {
  getMovie: (id: number) =>
    axiosService
      .get<GetMovieResponse>(`${urls.movie}/${id}${urls.key}`)
      .then((value) => value.data),
  getPopularMovies: () =>
    axiosService
      .get<GetMoviesResponse>(urls.movie.concat(urls.popular, urls.key))
      .then((value) => value.data),
  getMoviesPlayingNow: () =>
    axiosService
      .get<GetMoviesResponse>(urls.movie.concat(urls.nowPlaying, urls.key))
      .then((value) => value.data),
  getTopRatedMovies: () =>
    axiosService
      .get<GetMoviesResponse>(urls.movie.concat(urls.topRated, urls.key))
      .then((value) => value.data),
  getGenres: () =>
    axiosService
      .get(urls.genre.concat(urls.movie, urls.list, urls.key))
      .then((value) => value.data),
  searchMovie: (keyWord: string) =>
    axiosService
      .get<GetMoviesResponse>(
        urls.search.concat(
          urls.movie,
          urls.key,
          urls.query,
          keyWord,
          urls.page,
          urls.withoutAdultContent
        )
      )
      .then((value) => value.data)
};
