export type GenresType = {
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  name: string;
};

export type MoviesType = {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  budget: number;
  genres: [];
  tagline: string;
  revenue: string;
  status: string;
};

export type GenresPropsType = {
  id: number;
  name: string;
};
