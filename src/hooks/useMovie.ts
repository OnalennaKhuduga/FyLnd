import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useMovie = (id: number) => {
  const apiClient = new APIClient("/movie");

  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => apiClient.get(id),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useMovie;
