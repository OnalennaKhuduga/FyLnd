import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useMovieQueryStore from "../useMovieQueryStore";

export interface Movie {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

const useMovies = (endpoint: string) => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);
  const searchEndpoint = "/search/movie";
  const selectedEndpoint = movieQuery.searchText ? searchEndpoint : endpoint;
  const apiClient = new APIClient<FetchResponse<Movie>>(selectedEndpoint);
  const activeQuery = {
    ...(movieQuery.genreId !== undefined && {
      genreId: movieQuery.genreId,
    }),

    ...(movieQuery.searchText && {
      searchText: movieQuery.searchText,
    }),
  };

  return useInfiniteQuery({
    queryKey: ["movie", endpoint, activeQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          query: movieQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useMovies;
