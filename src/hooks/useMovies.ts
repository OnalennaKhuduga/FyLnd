import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

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

interface FetchResponse {
  page: number;
  results: Movie[];
}

const useMovies = () =>
  useQuery({
    queryKey: ["movie"],
    queryFn: () =>
      apiClient.get<FetchResponse>("/discover/movie").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default useMovies;
