interface Genre {
  id: number;
  name: string;
}

export interface MovieBase {
  id: number;
  backdrop_path: string;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export interface Movie extends MovieBase {
  genre_ids: number[];
}

export interface MovieDetails extends MovieBase {
  genres: Genre[];
  runtime: number;
  homepage: string;
}

export interface MovieVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
}

export interface MovieVideoResponse {
  results: MovieVideo[];
}
