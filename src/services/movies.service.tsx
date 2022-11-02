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
  getMovie: (id: number) => axiosService.get<GetMovieResponse>(`${urls.movie}/${id}${urls.key}`),
  getPopularMovies: () =>
    axiosService.get<GetMoviesResponse>(urls.movie.concat(urls.popular, urls.key)),
  getMoviesPlayingNow: () =>
    axiosService.get<GetMoviesResponse>(urls.movie.concat(urls.nowPlaying, urls.key)),
  getTopRatedMovies: () =>
    axiosService.get<GetMoviesResponse>(urls.movie.concat(urls.topRated, urls.key)),
  getGenres: () => axiosService.get(urls.genre.concat(urls.movie, urls.list, urls.key)),
  searchMovie: (keyWord: string) =>
    axiosService.get<GetMoviesResponse>(
      urls.search.concat(
        urls.movie,
        urls.key,
        urls.query,
        keyWord,
        urls.page,
        urls.withoutAdultContent
      )
    )
};
