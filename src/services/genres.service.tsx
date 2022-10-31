import { urls } from '../constants';
import axiosService from './axios.service';
import { GenresType } from '../../types';

export interface AllGenresResponse {
  genres: { id: number; name: string };
}
interface GenresListResponse {
  page: number;
  results: GenresType[];
}
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
