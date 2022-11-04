import { urls } from '../constants';
import axiosService from './axios.service';
import { Genre } from '../../types';

type AllGenresResponse = {
  genres: { id: number; name: string };
};
type GenresListResponse = {
  page: number;
  results: Genre[];
};
export const genreService = {
  allGenres: () =>
    axiosService.get<AllGenresResponse>(urls.genre.concat(urls.movie, urls.list, urls.key)),
  genreList: (id: string, page: string) =>
    axiosService.get<GenresListResponse>(
      urls.discover.concat(
        urls.movie,
        urls.key,
        urls.sortPopularityDesc,
        urls.page,
        page,
        urls.certainGenre,
        id
      )
    )
};
