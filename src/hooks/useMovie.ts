import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Movie } from "./useMovies";

const useMovie = (id: number) => {
  const apiClient = new APIClient<Movie>("/movie");

  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => apiClient.get(id),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useMovie;
