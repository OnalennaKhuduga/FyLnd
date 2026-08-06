import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";

interface Movie {
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

const apiClient = new APIClient<FetchResponse<Movie>>("/discover/movie");

const useMovies = () =>
  useQuery({
    queryKey: ["movie"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default useMovies;
