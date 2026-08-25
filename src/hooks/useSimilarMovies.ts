import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Movie, MovieBase } from "../types/movie";

const useSimilarMovies = (id: number) => {
  const apiClient = new APIClient<FetchResponse<Movie>>(`/movie/${id}/similar`);

  return useQuery({
    queryKey: ["similar", id],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useSimilarMovies;
